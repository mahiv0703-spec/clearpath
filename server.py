from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class AppHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    root = Path(__file__).parent
    server = ThreadingHTTPServer(("0.0.0.0", 5000), AppHandler)
    print("ClearPath running on port 5000")
    server.serve_forever()