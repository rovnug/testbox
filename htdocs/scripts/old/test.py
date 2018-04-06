#!/usr/bin/env python3.5

import socket
import time
import sys

TARGET = '192.168.86.91'
PORT = 7090
print(sys.argv[0] )
MESSAGE = sys.argv[1] + " " + sys.argv[2]
print(MESSAGE)

SOCK = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
#SOCK.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEPORT, 3)
SOCK.sendto(bytes(MESSAGE, "utf-8"),(TARGET, PORT))

#receive
SOCK = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
SOCK.bind(("192.168.86.88", PORT))

SOCK.sendto(bytes(MESSAGE, "utf-8"), (TARGET, PORT))
DATA, ADDR = SOCK.recvfrom(2000)
print(DATA)

SOCK.close()
