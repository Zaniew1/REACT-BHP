export const customStyles = {
  control: (baseStyles: object, state: { isFocused: boolean }) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'rgb(105, 108, 255)' : '#444564',
    '&:hover': {
      borderColor: 'rgb(105, 108, 255)',
    },
    backgroundColor: '#2b2c40',
    fontWeight: '400',
    fontSize: '0.9375rem',
    lineHeight: '1.53',
    outline: 'none',
    borderRadius: '0.4em',
    padding: '0.4375rem 0.875rem',
    minWidth: '20rem',
    cursor: 'pointer',
    transition: '.3s ease-in-out',
    boxShadow: 'none',
  }),
  option: (baseStyles: object, state: { isSelected: boolean; isFocused: boolean }) => ({
    ...baseStyles,
    color: state.isSelected ? 'rgb(105, 108, 255)' : '#babad1',
    fontWeight: '400',
    fontSize: '0.9375rem',
    lineHeight: '1.53',
    outline: 'none',
    padding: '0.4375rem 0.875rem',
    backgroundColor: state.isFocused ? '#36374d' : '#2b2c3f',
    '&:hover': {
      backgroundColor: '#36374d',
    },
    cursor: 'pointer',
  }),
  input: (baseStyles: object) => ({
    ...baseStyles,
    color: '#babad1',
  }),
  menuList: (baseStyles: object) => ({
    ...baseStyles,
    color: '#babad1',
    backgroundColor: '#2b2c3f',
  }),
  singleValue: (baseStyles: object) => ({
    ...baseStyles,
    color: '#babad1',
    backgroundColor: '#2b2c3f',
  }),
  multiValue: (baseStyles: object) => ({
    ...baseStyles,
    color: '#babad1',
    backgroundColor: '#2b2c3f',
    border: '1px solid #babad1',
  }),
  multiValueLabel: (baseStyles: object) => ({
    ...baseStyles,
    color: '#babad1',
    backgroundColor: '#2b2c3f',
  }),
  multiValueRemove: (baseStyles: object) => ({
    ...baseStyles,
    color: 'white',
    ':hover': {
      backgroundColor: '#232333',
      color: 'white',
    },
  }),
};
