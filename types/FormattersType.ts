export interface FormattersType {
  formatDate (value: string, time?: boolean): string
  formatAmount (value: string | number): string
  formatSnils (value: string): string
  formatCtc (value: string): string
  formatVu (value: string): string
  formatPassport (value: string): string
}
