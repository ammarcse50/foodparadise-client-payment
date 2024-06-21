import featuredImg from '/images/home/featured.jpg'

import SectionTitle from  '../../../components/SectionTitle/SectionTiltle'
const Featured = () => {
    return (
        <div className={`bg-[url('${featuredImg}')] bg-fixed  `} >
         <SectionTitle 
         heading={'Featured Item'}
         subHeading={'CHECK IT OUT'}
         ></SectionTitle>
 
         <div className='md:flex text-white justify-center items-center py-20 px-36 bg-gray-400100'>
            
            <div className=''>
                <img src={featuredImg} className='w-[400px]' alt="" />
            </div>
            <div className='md:ml-12'>
                <p>Jan 20, 2024</p>
                <h2>Best Food This Date</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Iure doloremque necessitatibus sed ratione corporis sunt adipisci mollitia quisquam et!</p>
                <button className="btn btn-outline btn-primary border-0 border-b-4">Primary</button>

            </div>

         </div>


        </div>
    );
};

export default Featured;