import Nav from '../../components/Nav';
import image from './contacts-manager.png';
const Index = () => {
    return ( 
        <>
        <Nav tabs={["login","register"]}></Nav>
        <section className='flex-row center'>
            <img src={image} alt="Contact Manage Picture"/>
        </section>
        </>
     );
}
 
export default Index;