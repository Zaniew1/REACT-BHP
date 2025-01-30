import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type ButtonType = {
    text: string,
    class: string,
    icon:string

}
export const Button = (props: ButtonType ):React.JSX.Element => {
  return (
    <div>
        <FontAwesomeIcon icon="fa-solid fa-filter" />
    </div>
  )
}
