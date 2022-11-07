import "./styles.css";

export const Layout = ({children}) => {
    return(
        <div className="centered-container flex-column layout">{children}</div>
    )
}