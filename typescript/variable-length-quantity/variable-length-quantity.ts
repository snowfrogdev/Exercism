export default class VLQ {
  static encode(integers: number[]): number[] {
    return integers.flatMap(VLQ.integerToBytes)
  }

  static decode(bytes: Readonly<number[]>): number[] {
    const chunks = VLQ.makeChunks(bytes) //?
    const integers = []
    for (const chunk of chunks) {
      const sevenBitBytes = chunk.map((num) => num & ~128) //?
      let integer = 0
      for (let i = 0; i < sevenBitBytes.length; i++) {
          integer += sevenBitBytes[i] << ((sevenBitBytes.length - 1 - i) * 7) //?
      }
      integers.push(integer)
    }
    return integers
  }

  static integerToBytes(integer: number): number[] {
    if (integer === 0) {
      return [0]
    }

    const chunks = []
    while (integer > 0) {
      chunks.unshift(integer % 128 + 128);
      integer = integer >>> 7
    }
    chunks[chunks.length - 1] -= 128
    return chunks
  }

  static makeChunks(bytes: Readonly<number[]>): number[][] {
    const bytesClone = [...bytes]
    const chunks = []

    let chunk = []
    while (bytesClone.length) {
      const byte = bytesClone.shift()!
      chunk.push(byte)
      if (byte < 128) {
        chunks.push(chunk)
        chunk = []
      }
    }

    return chunks
  }
}

