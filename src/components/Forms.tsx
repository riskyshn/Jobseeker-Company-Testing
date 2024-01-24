import React from 'react'

type BaseProps = {
  label?: string
  error?: string
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & BaseProps

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & BaseProps

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  BaseProps & {
    options: Array<{ value: string; label: string }>
  }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ name, className, label, error, ...props }, ref) => {
  return (
    <div className={className}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input
        ref={ref}
        name={name}
        id={name}
        className="block h-12 w-full rounded-lg border border-gray-400 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none"
        {...props}
      />
      {!!error && <span className="block text-sm text-red-600">{error}</span>}
    </div>
  )
})

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ name, className, label, error, ...props }, ref) => {
  return (
    <div className={className}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <textarea
        ref={ref}
        name={name}
        id={name}
        className="block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none"
        {...props}
      />
      {!!error && <span className="block text-sm text-red-600">{error}</span>}
    </div>
  )
})

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ name, className, label, error, options, ...props }, ref) => {
  return (
    <div className={className}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <select
        ref={ref}
        name={name}
        id={name}
        className="block h-12 w-full rounded-lg border border-gray-400 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {!!error && <span className="block text-sm text-red-600">{error}</span>}
    </div>
  )
})

Input.displayName = 'Input'
Textarea.displayName = 'Textarea'
Select.displayName = 'Select'
