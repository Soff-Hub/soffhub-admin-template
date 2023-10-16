import React from 'react'

export default function Documentation() {
  return (
    <div>
      <div className='mb-5'>
        <p className='font-bold text-xl'>Komponentalardan foydalanish</p>
        <p>- Komponentalarni yaratishda <a href='https://mui.com/' target='blank' className='text-blue-400 underline'>MUI</a> kutubxonasi ishlatilgan
        </p>
      </div>

      <div>
        <div className='mb-4'>
          <p className='font-bold text-xl'>Page (navigatsiya sahifa) lar qo'shish</p>
          <p className='font-bold text-md'>1- page faylini yaratish</p>
          <p className='bg-gray-200 p-2'>
            <p className='text-yellow-500'>src</p>
            <p className='[30px] text-yellow-500'>├ views</p>
            <p className='pl-[30px] text-yellow-500'>├ home</p>
            <p className='pl-[60px] text-yellow-500'>├ pages</p>
            <p className='pl-[90px] text-green-500'>├ yangi-page.js</p>
          </p>
          <p>yuqoridagi <span className='text-yellow-500'>pages</span> papkasiga o'z
            <span className='text-green-500'> yangi-page.js </span>
            faylini yarting va o'zpage kodlarini yozing
          </p>
          <p className='font-bold text-md mt-5'>2- page uchun route yozish</p>
          <p className='bg-gray-200 p-2 mb-4'>
            <p className='text-yellow-500'>src</p>
            <p className='text-yellow-500'>├ configs</p>
            <p className='pl-[30px] text-yellow-500'>├ routes.config</p>
            <p className='pl-[60px] text-yellow-500'>├ routes.js</p>
            <p>Yuqoridagi routes.js faylidagi <span className='text-yellow-500'>adminActionRoutes</span>
              o'zgaruvchisiga, o'z yaratgan page faylini yo'lini quyigagicha ko'rastishingiz kerak bo'ladi
            </p>
          </p>
          <p className='text-orange-600 bg-gray-300 p-2'>
            export const adminActionRoutes = [ <br />
            <p className='pl-[20px]'>
              ... oldingi sahifa route lari <br />
              {`{`} <br />
              <p className='pl-[20px]'>key: 'yangi-page',</p>
              <p className='pl-[20px]'>path: '/yangi-page-path',</p>
              <p className='pl-[20px]'>component: React.lazy(() {`=>`} import('views/home/pages/yangi-page'))</p>
              {`}`}
            </p>
            ];
          </p>
        </div>
      </div>
    </div >
  )
}
