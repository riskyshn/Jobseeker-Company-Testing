import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  containerClassName?: string
  placeholder?: string
  options: Array<{ value: string; label: string }>
}

export const CustomSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, containerClassName, className, placeholder, options, value, ...props }, ref) => {
    return (
      <div className={`relative flex overflow-hidden ${containerClassName || ''}`}>
        <span className={`pointer-events-none absolute bottom-px left-px right-px top-px flex items-center justify-end px-4`}>
          <FiChevronDown size={18} />
        </span>
        <select
          ref={ref}
          name={name}
          id={name}
          value={value}
          className={`block h-full w-full cursor-pointer appearance-none border bg-white focus:outline-0 ${className || ''}`}
          {...props}
        >
          <option value="">{placeholder || 'Select'}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  },
)

CustomSelect.displayName = 'CustomSelect'

export default CustomSelect
