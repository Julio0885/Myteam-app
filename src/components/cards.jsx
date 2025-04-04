export function Cards() {
    
    const teamMembers = [
        {
            name: 'Bill Mahoney',
            rol: 'Product Owner',
            image: './images/photo1.png',
        },
        {
            name: 'Saba Cabrera',
            rol: 'Art Director',
            image: './images/photo2.png',
        },
        {
            name: 'Shae Le',
            rol: 'Teach Lead',
            image: './images/photo3.png',
        },
        {
            name: 'Skylah Lu',
            rol: 'UX Designer',
            image: './images/photo4.png',
        },
        {
            name: 'Griff Richards',
            rol: 'Developers',
            image: './images/photo5.png',
        },
        {
            name: 'Stan Jhon',
            rol: 'Developers',
            image: './images/photo6.png',
        }
    ]
    return (
        <>
            {teamMembers.map((member, index) => (
                <div className="relative md:relative ml-4 mr-4 even:mt-8 md:nth-[3n+2]:mt-18"
                    key={index}>
                <img src={member.image} alt={member.name} />
                <p className='absolute md:absolute top-0 right-0 text-[15px] md:text-2xl text-gray-700'
                    style={{
                        writingMode: 'vertical-rl',
                        transform: 'translateY(10%) translateX(90%)',
                    }}>
                    {member.rol}
                </p>
                <h3 className="font-bold text-2xl ">{member.name}</h3>
            </div>

            ))}      
       
        </>
    )
}
