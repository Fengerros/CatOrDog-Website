import http.server
import socketserver

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

handler = MyHttpRequestHandler
httpd = socketserver.TCPServer(("", 8000), handler)

print("Serving at port 8000")
httpd.serve_forever()