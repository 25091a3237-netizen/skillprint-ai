$port = 3000
$root = 'c:\Users\shaik\OneDrive\Desktop\skillprint-ai'
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $port)
$listener.Start()

Write-Host '========================================'
Write-Host '  SkillPrint AI -- Web Server Running   '
Write-Host '========================================'
Write-Host ''
Write-Host ('  Local: http://localhost:' + $port)
Write-Host ''

$mimeMap = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.ico'  = 'image/x-icon'
  '.json' = 'application/json'
}

while ($true) {
  try {
    $client = $listener.AcceptTcpClient()
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream)
    $line = $reader.ReadLine()
    if (-not $line) { $client.Close(); continue }
    
    $parts = $line.Split(' ')
    if ($parts.Length -lt 2) { $client.Close(); continue }
    
    $rawUrl = $parts[1].Split('?')[0]
    if ($rawUrl -eq '/' -or $rawUrl -eq '') { $rawUrl = '/index.html' }
    $rel = $rawUrl.TrimStart('/').Replace('/', '\')
    $path = Join-Path $root $rel

    if (Test-Path $path -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($path).ToLower()
      $mime = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($path)
      $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
      $hdrBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
      $stream.Write($hdrBytes, 0, $hdrBytes.Length)
      $stream.Write($bytes, 0, $bytes.Length)
      Write-Host ('  200  ' + $rawUrl)
    } else {
      $msg = '404 Not Found: ' + $rawUrl
      $msgBytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
      $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($msgBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
      $hdrBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
      $stream.Write($hdrBytes, 0, $hdrBytes.Length)
      $stream.Write($msgBytes, 0, $msgBytes.Length)
      Write-Host ('  404  ' + $rawUrl)
    }
    $client.Close()
  } catch {
    # Silently handle transient connection drops
  }
}
