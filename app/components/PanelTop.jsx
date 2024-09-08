import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PanelTop = () => {
  return (
    <div className="topbar w-full rounded-xl py-2 flex justify-between px-3 bg-slate-50">
            <div className="logo">
            <svg width="60" height="57" viewBox="0 0 60 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 0.263672C2.93287 0.263672 0.625 2.46337 0.625 5.14844C0.625 7.83351 2.93287 10.0332 5.75 10.0332C8.56712 10.0332 10.875 7.83351 10.875 5.14844C10.875 2.46337 8.56712 0.263672 5.75 0.263672ZM27.1221 1.4515C24.9999 1.34166 20.4975 10.0401 20.3929 14.9537C20.3104 18.8221 25.1387 21.7361 25.2349 25.604C25.342 29.9137 21.6666 32.6274 20.4352 37.7006C19.8694 39.5429 21.426 42.258 22.3222 43.655C23.0301 44.7414 23.8472 45.6395 24.658 46.2534C23.8876 42.8109 24.0085 39.1893 24.6342 35.803C25.042 33.5965 26.367 31.7919 27.4457 30.1045C28.5245 28.4171 29.338 26.9015 29.242 25.3606C29.1415 23.7483 27.9447 22.257 26.4854 20.5986C25.0259 18.9402 23.3164 17.1416 22.9497 14.6995C22.6787 12.6547 23.7642 9.90894 24.5256 7.89618L26.6004 8.72587C25.7841 10.6275 25.2247 12.3344 25.177 14.3958C25.4204 16.0168 26.7342 17.5444 28.2092 19.2205C29.6842 20.8967 31.3332 22.7485 31.488 25.2334C31.6317 27.5406 30.4844 29.4729 29.3672 31.2205C28.25 32.968 27.1437 34.5852 26.85 36.175C26.152 39.9523 26.151 43.9902 27.3405 47.5452C27.7459 48.7571 28.5196 50.2688 29.4322 51.791C29.568 51.4852 29.6827 51.1713 29.7757 50.8513C30.101 49.7216 30.072 48.4963 29.7045 47.9797L31.5667 46.7759C32.5885 48.2119 32.3612 49.9746 31.9455 51.4188C31.7375 52.1408 31.46 52.7953 31.1551 53.3308C31.0366 53.5388 30.9146 53.7283 30.7804 53.9035C31.0275 54.2694 31.2799 54.632 31.5375 54.9913C31.9917 55.6241 32.4628 56.2457 32.9505 56.8555H37.0349C38.417 51.8924 29.9856 45.305 29.9529 39.3308C29.9256 34.3624 34.9579 29.941 34.2984 25.0124C33.7749 21.1001 29.166 18.6099 27.9662 14.8354C26.6085 10.5635 29.0086 1.80666 27.2214 1.46342C27.1886 1.45717 27.1555 1.45319 27.1221 1.4515ZM8.625 5.14844C8.625 6.67463 7.35125 7.88867 5.75 7.88867C4.14875 7.88867 2.875 6.67463 2.875 5.14844C2.875 5.13366 2.876 5.11901 2.87625 5.10424C3.22575 5.34526 3.65175 5.48978 4.10937 5.48978C5.26962 5.48978 6.23437 4.57025 6.23437 3.46439C6.23437 3.08087 6.11625 2.72095 6.77737 2.60729C7.43837 2.49351 8.625 3.67562 8.625 5.14844ZM39.561 7.21195C37.2961 7.21195 35.436 8.985 35.436 11.1436C35.436 13.3024 37.2961 15.0752 39.561 15.0752C41.826 15.0752 43.686 13.3024 43.686 11.1436C43.686 8.985 41.826 7.21195 39.561 7.21195ZM40.2254 9.47086C40.9379 9.72225 41.436 10.3682 41.436 11.1436C41.436 12.1433 40.6099 12.9307 39.561 12.9307C38.5894 12.9307 37.8104 12.2545 37.7006 11.3603C37.9131 11.4423 38.1436 11.489 38.384 11.489C39.3989 11.489 40.2456 10.6819 40.2456 9.71462C40.2456 9.63182 40.2374 9.55092 40.2254 9.47086ZM35.561 14.837C34.4007 14.837 33.436 15.7565 33.436 16.8623C33.436 17.9683 34.4007 18.8877 35.561 18.8877C36.7214 18.8877 37.686 17.9683 37.686 16.8623C37.686 15.7565 36.7214 14.837 35.561 14.837ZM43.917 17.7185C43.8921 17.718 43.8671 17.7195 43.8425 17.7231C42.5296 17.9233 46.2595 26.299 45.0512 30.3737C44.3467 32.7497 40.9291 33.8908 40.3996 36.3079C39.7867 39.1059 42.518 41.7994 42.4506 44.657C42.359 48.5515 37.1709 52.7878 39.6225 55.9045C40.2795 56.7395 41.0945 55.7812 41.8811 55.2249C42.461 54.722 43.0245 54.2023 43.5707 53.6663C43.3477 53.4322 43.1454 53.1808 42.9661 52.9148C42.2409 51.8371 41.8913 50.5687 41.967 49.2905L44.2136 49.408C44.1569 50.3945 44.4739 51.1839 44.8591 51.7554C44.9335 51.8659 45.0104 51.9643 45.0866 52.0559C45.291 51.8158 45.4812 51.5827 45.6379 51.3677C46.4107 50.3085 47.0546 49.204 47.0651 48.2778C47.0841 46.616 45.8912 44.8706 44.5645 42.9537C43.2377 41.0368 41.7595 38.8883 42.1772 36.3103C42.4297 34.7512 43.6649 33.8485 44.6285 33.1116C45.592 32.3747 46.3142 31.7589 46.4826 31.1763L48.6519 31.7459C48.22 33.2399 46.9756 34.0659 46.0364 34.7842C45.0971 35.5025 44.4931 36.0679 44.4009 36.6377C44.1405 38.2451 45.1371 39.887 46.4424 41.7727C47.7476 43.6586 49.3444 45.728 49.3151 48.3011C49.2954 50.0437 48.3111 51.4601 47.4854 52.592C46.4722 53.9807 44.8685 55.5357 43.3935 56.8125C43.3765 56.8272 43.36 56.8408 43.343 56.8555H47.7087C48.8475 56.4251 49.8657 55.8266 50.6037 55.1058C53.189 52.5812 52.0606 48.2325 51.1424 44.5349C50.5997 42.3501 46.9949 39.5827 47.0579 36.653C47.1085 34.295 50.5777 32.801 50.615 30.4428C50.6889 25.763 45.5337 17.746 43.917 17.7185ZM7.8855 18.3305C7.86025 18.3317 7.8355 18.3344 7.81175 18.3386C6.49888 18.5697 9.429 24.2855 9.02025 27.2578C8.6795 29.7353 6.293 31.7068 6.03687 34.1934C5.704 37.4239 8.17312 40.5082 8 43.75C7.7845 47.7866 1.66687 52.2615 4.0915 55.3935C4.68712 54.8714 5.41075 54.189 6.16337 53.4128C7.848 51.6754 9.64975 49.4662 10.3799 47.8943C11.0275 46.5 11.1674 44.7669 10.9841 43.1191C10.4725 40.595 8.5765 38.3651 8.416 36.0437C8.2815 33.5778 9.56025 31.5793 9.904 29.8365C10.1729 28.4735 10.5469 25.5005 10.5469 25.5005L12.7812 25.7527C12.7812 25.7527 12.4217 28.679 12.1152 30.2329C11.6685 32.4974 10.5755 34.3265 10.6631 35.9324C11.0485 38.4627 12.9361 40.6077 13.2216 42.893C13.434 44.8008 13.3084 46.8872 12.4375 48.7622C11.4882 50.806 9.58937 53.039 7.81562 54.8682C7.25718 55.4447 6.68075 56.0052 6.08712 56.5488C8.348 56.9851 11.4664 55.8164 13.0804 54.4495C16.6881 51.3942 17.1091 46.8238 15.6941 41.4807C14.7895 38.0652 12.9111 35.6515 13.1341 32.5835C13.2697 30.7151 16.5344 29.5187 15.4619 27.4212C13.7052 23.9856 9.47312 18.2526 7.8855 18.3305ZM55.3525 32.5491C54.4002 32.5491 53.52 32.8635 52.8191 33.3873C52.5521 33.5369 52.3273 33.7461 52.1641 33.997C51.5799 34.6759 51.2275 35.5417 51.2275 36.4808C51.2275 38.6396 53.0877 40.4124 55.3525 40.4124C57.6175 40.4124 59.4775 38.6396 59.4775 36.4808C59.4775 34.3222 57.6175 32.5491 55.3525 32.5491ZM55.593 34.7095C56.5246 34.8196 57.2275 35.5591 57.2275 36.4808C57.2275 37.4805 56.4014 38.2679 55.3525 38.2679C54.3721 38.2679 53.5866 37.5797 53.4882 36.6735C53.5729 36.6851 53.6586 36.6931 53.7461 36.6931C54.7609 36.6931 55.6076 35.886 55.6076 34.9187C55.6076 34.8479 55.6019 34.7784 55.593 34.7095ZM19.5046 43.2329C19.0454 48.726 20.245 53.4223 23.8809 56.8555H30.1582C29.9973 56.6389 29.8381 56.4212 29.6807 56.2023C28.1092 54.0131 26.4837 51.4224 25.544 49.1246C23.4157 48.5845 21.7236 46.8012 20.4109 44.7864C20.0836 44.2823 19.7812 43.7639 19.5046 43.2329Z" fill="#80F5AC"/>
          </svg>
            </div>
            <div className="panel-btn flex justify-between gap-x-8 my-auto">
               <Link href={"/"}>
                <Image src="/settings.png" width={26} height={26}/>
               </Link>

               <Link href={"/"}>
               <Image src="/user.png" width={26} height={26}/>
               </Link>

               <Link href={"/"}>
               <Image src="/hut.png" width={26} height={26}/>
               </Link>

               <Link href={"/"}>
               <Image src="/arrow.png" width={26} height={26}/>
               </Link>
            </div>
        </div>
  )
}

export default PanelTop