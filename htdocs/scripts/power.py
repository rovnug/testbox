#!/usr/bin/env python3.5
"""Collect measures"""
import binascii
import struct
from pymodbus.client.sync import ModbusTcpClient as ModbusClient

#import logging


def main():
    """Populate measures"""
    #logging.basicConfig()
    #log = logging.getLogger()
    #log.setLevel(logging.DEBUG)

    #read_holding_registers -> 40000 osv
    #read_input_registers -> 30000 osv

    client = ModbusClient(host='192.168.86.50', port=502)
    client.connect()

    our_unit = 1
    # register = 4 # 0, 2, 4, 6, .... now val[1][1]
    quantity = 2 # 2 bits

    powerlist = [('il1', 0), ('il2', 2), ('power', 4), ('il3', 6)]
    res = '{'

    for val in enumerate(powerlist):
        readreg = client.read_input_registers(val[1][1], quantity, unit=our_unit)

        hex1 = hex(readreg.registers[0])
        hex2 = hex(readreg.registers[1])

        data = hex1[2:] + ' ' + hex2[2:]
        if data == '0 0':
            data = '0000 0000'

        fdata = struct.unpack('>f', binascii.unhexlify(data.replace(' ', '')))
        res += '"' + val[1][0] + '": "' + round(fdata[0], 1) + '",'

    res += '}'
    print(res)

    client.close

if __name__ == "__main__":
    main()
