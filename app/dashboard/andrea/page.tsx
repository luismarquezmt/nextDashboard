import { lusitana, sigmar } from '@/app/ui/fonts'
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <p className={`${sigmar.className} text-3xl capitalize text-gray-800`}>Te amo Andrea </p>

            <Image
                src="/familia.jpg"
                width={400}
                height={600}
                className="block"
                alt="Screenshots of the dashboard project showing desktop version"
            />

            <p className={`${lusitana.className} text-3xl capitalize text-gray-800`}>Gracias por tu apoyo, te adoro </p>
            <p className={`${lusitana.className} text-3xl capitalize text-gray-900`}>hay vamos progresando </p>
        </>
    )
}
