<!-- index.html -->
<html>
<head>
  <!-- manifest.jsonを呼び出しています -->
  <link rel="manifest" href="./manifest.json">
  <script>
    // service workerが有効なら、service-worker.js を登録します
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js').then(function() { console.log('Service Worker Registered'); });
   }
  </script>
  <title>Hello PWA.</title>
  <style>
    body {
      text-align:center;
      font-size: 40px;
      vertical-align: middle;
    }
    .image {
      width: 80%; 
      margin: auto;
      display: block;
    }
  </style>
</head>
<body>
  <h1>Hello PWA.</h1>
  <img src="./pwa-logo.svg" alt="PWA logo" class="image" />
  <a href="p.html">p.html</a>
</body>
</html>
<!-- p.html -->
<html>
<head>
  <title>Hello PWA. p.html</title>
  <style>
    body {
      text-align:center;
      font-size: 40px;
      vertical-align: middle;
    }
    .image {
      width: 80%; 
      margin: auto;
      display: block;
    }
  </style>
</head>
<body>
  <h1>p.html</h1>
  <img src="./p-chan.jpg" alt="p-chan" class="image" />
  <a href="index.html">index.html</a>
</body>
</html>
