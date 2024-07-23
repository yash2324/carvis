import InputBar from "./InputBar";
import ImageAvatars from "./Avatar"
function AiPage() {
  return (
    <div className='relative min-h-screen w-full lg:w-3/4  lg:px-2 lg:p-4  mt-12 lg:mt-0  '>
      <div className='flex items-center py-1 border-b-4  mx-3'>
        <div className='mr-4'>
          <img className='w-[115px] rounded-md h-[95px]' src="https://s3-alpha-sig.figma.com/img/1e3b/8c85/c3f7d1c847c5461c0c2441669bd958db?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lE4ZD8x9kptt30KidbzIBnMFoWk1peDBNFMMkjBKxvyCcE2d-qLlbuPbVsMh8aTAAtCiuWk-KOBOg~LD7W4JngLd8PTKh8Cu9GruRpTTIWIPa-jekDQAslYnnnMDllWJbrT~6d3KFmv-MvmBmX6sT~~hHEjtEy99RLi~qE3BoRmxsSvai8TPJ72fqb0PHzy1SZWlFog7LDLQ5-WJGjOyglpBVMuVrvuPt6IHo2IkiTk7D1A~~TBeWbj7YLioEWeeKJqGd0e-kOtwVMRexFFlupE5Bt-bhol~Cx2vpwRulrYWg4xwuUN1H8LRD-jQKE4jpk48ya~oAaw4yk5FTP3cyA__" alt="BMW M3 2020" />
        </div>
        <div>
          <h1 className='text-lg font-bold'>BMW M3 2020</h1>
          <p className='text-sm'>Miles: 54000</p>
          <p className='text-sm'>Last Service Date: 05/2024</p>
          <p className='text-sm'>Engine Type: V6</p>
        </div>
      </div>

      <div className="bg-[#D3D3D3] mt-2 flex py-2  border-b-4 rounded-sm mx-3">
        <div className="p-2">
          <ImageAvatars src="https://s3-alpha-sig.figma.com/img/b1b8/cf8c/9cab4790e5f3119ce76099d838feb177?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1zaQcFrMLSpWTrXTZSrPaczn3p7YoQknZfO47NGXpCsOZwb1lZwMSo7vyy3Zd-ozSzlcFBzAeb6u9b5HOeAFZefGGtHkp1v1tHDuBXSezndoUXT5aDGOoG09HaAk5g4OrgFzlcrRXzbk-tcr3lWNRpa890qAITADmrA68SqmDbN2zkbySeluMTMnHySysa9taK7Sw88cCg2FFDupvpqVnq6lbbd-wyTP1TbRGrkg-vJa9hMXRcgg21XX8nOlii-bNPnHIYOg~XRqoylVyhRc1~E7mRf-mxBibTqTinWNqcnkG-tmEr7aIKIOushUdnhFHJ7CQGn2ukRSH5hYe-xMg__" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Carvis</h3>
          <p className="text-sm">Diagnostic information will appear here</p>
        </div>
      </div>
      
      <div className="bg-[#D3D3D3]  mt-4 flex justify-end py-1 border-b-4  mx-3  lg:ml-20 rounded-sm">
  <div className="flex items-center">
    <div className="text-right mr-2">
      <h3 className="font-semibold text-lg">James</h3>
      <p className="text-sm">Show me the writing diagram parts i need</p>
    </div>
    <div className="p-2">
      <ImageAvatars src="https://s3-alpha-sig.figma.com/img/1cdb/77bd/ce8fbd998763598a67b51c195904d30d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j9AG1nK0XgpgI3TKXWmEzt1r4bM9pgVfxSCEMb4wuVubXr1C5yIXqJpNhhZMC4R6~duzWZtKXveYXHbe7GRZb5GVpg3DxyIDfMNm~u4uJpxfcZBCH9Z1keuFfuY~7i5y3ON~6Yh4DBusK4rS3X2LMBI~hzY3hVh~-kpRgbDesugav8mTmhxVQLYyVPQl8cCxE1j9K7oY4L5Tw5orl0af-7gDYZGHT5Sj8feLMmbCdSxJhBmpy9xL~~uUd~7MVfMDyYzyPEo2QbnQad1-CFGP969ZJezoLdEw7emLJrPK93PBbNF1CScodrAq2tbsyniAmWWYWLx1OY-3NUBpDNBHSw__" />
         </div>
       </div>
   </div>

   <div className="bg-[#D3D3D3]  rounded-md mt-8 mx-3" >
      <div className="top-[346px] left-[448px] px-6 lg:px-24 pt-3">
        <h3 className="font-medium">Carvis</h3>
        <p>Sure, here's the wiring diagram for engine misfire. I would suggest to focus on cylinder 1. It is the red wire in the diagram
        below. Here are the parts you need:</p>
      </div>
      <div className="lg:flex px-8 lg:px-24 mt-3 pb-5 mb-2">
          <div  className="lg:flex lg:flex-row ">
            <img className="w-[550px] lg:w-[306px] rounded-md h-[200px] lg:h-[222px]" src="https://s3-alpha-sig.figma.com/img/d37f/87a0/02d8da7d2756c9d4799d91a585d1fe61?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsXcSQriCrTVZ0CPJlF1iuUPrLzt1Lh6gcnBJpeBMueSvXNTm9qLGUviscmSF8A4qTxO-8mSwEXClh2hdRStzW1O5-ns0DKrdnuHoE-Jbbu2oAsMb85YHKauqGOgiVHAokav6m8pwo8sgbP~7eVjfdrzYA-qNXEP2GPeT3rY19x0kkvtfotJlkiRuR~tyC57mSx2RWJRMxI5aAPcT9aILknNZJH999Qr2Z~e84kgtXR0P1gqxQkecu~GF6109-pXcj8A1dnGtChQrPQ7K3T4~SgpFI6dTNeAYDIFEFct4iOSxbRuQ2jPP8opPrA~6UcOMKdfu~KDtT4gl1zc4QEDiA__" alt="" />
          </div>
          <div className="mt-8 lg:ml-16 ">
               <div className="lg:flex lg:p-4">
                  <div  className="">
                  <img className="w-[250px] lg:w-[120px] h-[120px] lg:h-[72px]" src="https://s3-alpha-sig.figma.com/img/07c9/14d5/d02f3dbc902b2b7f583fbbe051bd7f9a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsJ7PNlrMthiJv8cZeXsriBfy9k3QseohDTUB~snKBM6amSYXggLyIn0V6DbAv-xxf3yCzf1IL4wTUtO5-~rAiyJe2dgnZCiVno71drhGyUcB5B0TET6yuuurKw5GNjR1UcISpd9ecSHi2sdjTHBT7a8D8~U04veXeejCZFHdUSAJeVcvO27VKp4WnJ5uho65J8P0kzIjMB3D9T5yEqE6DDmBwwlqtWjGwLcfyuJwRJmjxrhmc3UKv~sKoo-lfWPkPpI6ajun9XVN7JBYBmnxQhbLAtY3X7zzoKQXjM0H4k-48wueky5EaPOBLOG1DOqrJpOGblFizdwsP7E5Ujkvg__" alt="" />

                  </div>
                  <div>
                    <p className="mx-4 mt-2 lg:mt-0 font-semibold "> 
                    Autolite Iridium XP Automotive
                    Replacement Spark Plugs, XP3924
                    (4 Pack)
                    </p>
                  </div>
               </div>
               <div className="lg:flex p-4 mt-6 lg:mt-0">
                  <div>
                  <img className="w-[250px] lg:w-[120px] h-[120px] lg:h-[72px]" src="https://s3-alpha-sig.figma.com/img/a168/cdbb/5ec6ea95298abc1e3ecf90161b4f6d1b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNCmDm0H6llxXiwl5h55ehI05JzUIf2DZLaJatTjajn9BW~SODlbfGofE3ayAef-d6ROR2mLAY0vNvLh-XV9e4QNccs6DLdUqnn02ceGeeHaILPwDql57mzudBqHkl-6WWTwdEoemPPP6zczjtpJxwWMEEc4DWJUnuJn9NBJM1t93z7LtwDHAci0sXnxg-b1MT8R4OVxph3VTPSAYsJvDSX0767qXzrlYgl972W8Qd8M-arLva0iwiB-mUpPS90~692-OJriX-w1GXW5~ROfEijDYj0nrSi8Te5agGJodilW9B63DYZvq~hSOFoCIT7BT9Ihn~jgnhoHYuvJKEzsQQ__" alt="" />

                  </div>
                  <div>
                    <p className="ml-4 mt-2 lg:mt-0 font-semibold"> 
                    Denso Direct Ignition Coil OE Quality
                    - 673-2313
                    </p>
                  </div>
               </div>
          </div>
      </div>
   </div>

   <div className="lg:flex lg:flex-row justify-between mx-6 lg:mx-28">
  <div className="border-2 font-medium border-black rounded-md mt-4 p-4">Start Diagnosis</div>
  <div className="border-2 font-medium border-black rounded-md mt-4 p-4">Suggestion 2</div>
  <div className="border-2 font-medium border-black rounded-md mt-4 p-4">Suggestion 3</div>
</div>
      
      <div className="w-full mt-12 bg-[#D3D3D3] p-2 lg:p-4">
        <InputBar />
      </div>
    </div>
  );
}

export default AiPage;