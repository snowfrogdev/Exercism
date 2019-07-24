class Matrix {
  rows: number[][]
  columns: number[][]
  constructor(matrix: string) {
    this.parseMatrix_(matrix)
  }

  private parseMatrix_(matrix: string): void {
    this.rows = matrix
      .split('\n')
      .map((row) => row.split(' '))
      .map((row) => row.map(Number))

    this.columns = Array(this.rows.length).fill(undefined).map((_) => [])
    this.rows.forEach((row, rowIndex) => {
      row.forEach((value, columnIndex) => {
        this.columns[columnIndex][rowIndex] = value
      })
    })
  }
}

export default Matrix