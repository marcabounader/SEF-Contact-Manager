import Nav from "../../components/Nav";
import ContactList from "../../components/ContactList";
const Contacts = () => {
    const tabs=["Add"];
    return ( 
        <>
        <Nav tabs={tabs}></Nav>
            <section>
                <ContactList/>
            </section>
        </>
        
     );
}
 
export default Contacts;