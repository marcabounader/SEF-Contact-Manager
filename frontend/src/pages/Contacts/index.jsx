import Nav from "../../components/Nav";
import ContactList from "../../components/ContactList";
import NavBar from "../../components/NavBar";
const Contacts = () => {
    const tabs=["add"];
    return ( 
        <>
        <NavBar></NavBar>
            <section>
                <ContactList/>
            </section>
        </>
        
     );
}
 
export default Contacts;