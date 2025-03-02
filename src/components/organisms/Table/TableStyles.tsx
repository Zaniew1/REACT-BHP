export const TableStyles = {
  width: '100%',
  color: '#babad1',
  fontSize: '0.6rem',
  boxSizing: 'border-box',
  gridTemplateColumns:
    'minmax(3rem ,3rem) minmax(4rem, 4rem) minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr) minmax(7rem, 7rem)',
};
export const HeaderStyles = {
  backgroundColor: 'rgba(43, 44, 64, 0.96)',
};
export const HeaderRowStyles = {
  backgroundColor: 'rgba(43, 44, 64, 0.96)',
};

export const HeaderCellStyles = {
  color: '#babad1',
  fontWeight: 400,
  fontSize: '0.7rem',
  padding: '0.8rem',
  textTransform: 'uppercase',
  border: '1px solid rgb(68, 69, 100)',
  borderCollapse: 'collapse',
};
export const HeaderSelectRowStyles = {
  ...HeaderCellStyles,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(43, 44, 64, 0.96)',
};
export const FirstElement = {
  width: '1rem',
};
export const RowStyles = {
  backgroundColor: 'rgba(53, 54, 78, 0.96)',
  padding: '0.8rem',
  border: '1px solid rgb(68, 69, 100)',
  borderCollapse: 'collapse',
};
export const EvenRowStyles = {
  ...RowStyles,
  backgroundColor: 'rgba(53, 54, 78, 0.5)',
};

export const CellSelectStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid rgb(68, 69, 100)',
  border: '1px solid rgb(68, 69, 100)',
};
export const CellStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.4rem',
  borderBottom: '1px solid rgb(68, 69, 100)',
  border: '1px solid rgb(68, 69, 100)',
  borderCollapse: 'collapse',
};
