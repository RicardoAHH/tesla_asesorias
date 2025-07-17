
import { Link } from 'react-router'

export default function WPbutton() {
    return (
        <Link to='https://wa.me/+525532059945' target="_blank" rel="noopener noreferrer">
            <button className='w-[70px] lg:w-[100px] cursor-pointer'>
                <img src="/wp2.png" alt="wp" />
            </button>
        </Link>
    )
}
