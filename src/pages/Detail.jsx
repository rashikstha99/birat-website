import React from 'react'
import Image from 'next/image'
import NoticeImg from '../../public/scan.jpeg'
import { Calendar } from 'lucide-react'


const Detail = () => {
  return (
    <div className='container py-12 flex flex-col md:flex-row items-start gap-2 md:gap-0'>
        <div className="w-full lg:w-2/12 flex items-center gap-2 text-text-dark pt-0 lg:pt-4">
            <Calendar className="size-6 text-secondary" />
            <p>Aug 13, 2025</p>
        </div>
        <div className="w-full lg:w-10/12">
            <h1 className='mb-4 text-primary text-center capitalize'>Scan for assistance</h1>
            <Image
                className='h-[550px] w-auto object-contain m-auto pb-4'
                src={NoticeImg}
                height={800}
                width={800}
                alt='Dummy Image'
            />
            {/* <p className='text-justify text-text-dark'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis turpis lacus. Maecenas placerat non magna sit amet cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nunc vitae nisl posuere condimentum et aliquam diam. Fusce justo purus, ultricies ac felis quis, maximus sagittis dui. Pellentesque gravida vehicula volutpat. Nullam lacinia sem enim, sit amet efficitur tortor bibendum et. Pellentesque semper luctus mattis. Cras sed dignissim urna, at sollicitudin mauris.

                Pellentesque ac elementum massa. Sed tortor nunc, ullamcorper quis pellentesque at, tempus vel sapien. Suspendisse eleifend lectus vel sagittis eleifend. Aliquam at est ex. Vivamus gravida aliquam sagittis. Pellentesque cursus mi at lorem ultrices euismod. Vivamus vitae justo eu augue dignissim semper vitae non tortor. Vivamus magna turpis, consectetur vitae pretium vitae, sollicitudin ac erat.

                Aenean molestie purus ut ex mollis, ut venenatis metus consequat. Integer ullamcorper risus non nulla convallis, luctus pellentesque purus elementum. Maecenas interdum ultricies venenatis. Etiam egestas nisl tellus, sit amet convallis lectus lobortis eu. Cras tempor nunc quis condimentum finibus. Nullam blandit neque sodales vestibulum imperdiet. Aenean ullamcorper diam leo, nec rhoncus elit commodo sed. Phasellus lacus nunc, vehicula at sapien varius, congue accumsan leo. Curabitur placerat laoreet sapien id suscipit. Cras at pharetra mauris. Integer egestas felis neque, nec molestie arcu efficitur nec. Nunc a gravida lectus, sit amet scelerisque eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                Nam cursus consectetur feugiat. Nunc a consectetur mi, vel aliquet augue. Quisque vehicula ornare risus at facilisis. Nullam facilisis diam ac fermentum convallis. Quisque sit amet nisl urna. Nulla orci nisi, tincidunt ut condimentum eu, posuere ac lorem. Suspendisse sit amet facilisis risus, ac lacinia lectus. Nullam ante mi, faucibus sit amet augue sed, tempor egestas elit. Etiam feugiat, sem in varius semper, tellus orci pretium urna, eget accumsan urna lectus tempus magna.

                Phasellus interdum cursus sapien, at vehicula dui ultrices ut. Integer id sodales dui. Ut posuere massa nisl, quis placerat tellus sagittis ac. Vestibulum in metus in nunc rhoncus dapibus ut et risus. Donec et nisl eget lorem ultricies lacinia vitae vitae justo. Praesent id dui quis nisl blandit ultricies. Aenean placerat dictum magna, vel interdum mi blandit vestibulum. Morbi eu orci dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ultricies arcu nec congue feugiat.
            </p> */}
        </div>
    </div>
  )
}

export default Detail