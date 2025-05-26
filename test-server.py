#!/usr/bin/env python3
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler, test
import sys
import os


class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        SimpleHTTPRequestHandler.end_headers(self)


if __name__ == "__main__":
    import argparse as ap

    parser = ap.ArgumentParser()
    parser.add_argument(
        "--bind",
        "-b",
        metavar="ADDRESS",
        help="specify alternate bind address " "(default: all interfaces)",
    )
    parser.add_argument(
        "--directory",
        "-d",
        default=os.getcwd(),
        help="specify alternate directory " "(default: current directory)",
    )
    parser.add_argument(
        "port",
        action="store",
        default=8000,
        type=int,
        nargs="?",
        help="specify alternate port (default: 8000)",
    )
    args = parser.parse_args()

    class TestServer(ThreadingHTTPServer):
        def finish_request(self, request, client_address):
            self.RequestHandlerClass(
                request, client_address, self, directory=args.directory
            )

    test(
        CORSRequestHandler,
        TestServer,
        port=args.port,
    )
