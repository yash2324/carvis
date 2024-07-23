import InputBar from "./InputBar";
import ImageAvatars from "./Avatar";
import image from "../../public/image.png"
function ChatbotInfo() {
  return (
    <div className="relative min-h-screen w-3/4 p-4 pb-16">
      <div className="flex items-center py-1 border-b-4">
        <div className="mr-4">
          <img
            className="w-[115px] rounded-md h-[95px]"
            src="https://s3-alpha-sig.figma.com/img/1e3b/8c85/c3f7d1c847c5461c0c2441669bd958db?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lE4ZD8x9kptt30KidbzIBnMFoWk1peDBNFMMkjBKxvyCcE2d-qLlbuPbVsMh8aTAAtCiuWk-KOBOg~LD7W4JngLd8PTKh8Cu9GruRpTTIWIPa-jekDQAslYnnnMDllWJbrT~6d3KFmv-MvmBmX6sT~~hHEjtEy99RLi~qE3BoRmxsSvai8TPJ72fqb0PHzy1SZWlFog7LDLQ5-WJGjOyglpBVMuVrvuPt6IHo2IkiTk7D1A~~TBeWbj7YLioEWeeKJqGd0e-kOtwVMRexFFlupE5Bt-bhol~Cx2vpwRulrYWg4xwuUN1H8LRD-jQKE4jpk48ya~oAaw4yk5FTP3cyA__"
            alt="BMW M3 2020"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold">BMW M3 2020</h1>
          <p className="text-sm">Miles: 54000</p>
          <p className="text-sm">Last Service Date: 05/2024</p>
          <p className="text-sm">Engine Type: V6</p>
        </div>
      </div>
      
      <div className="bg-[#D3D3D3] mt-2 flex py-4 border-b-4 rounded-sm">
        <div className="p-2">
          <ImageAvatars src="https://s3-alpha-sig.figma.com/img/b1b8/cf8c/9cab4790e5f3119ce76099d838feb177?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1zaQcFrMLSpWTrXTZSrPaczn3p7YoQknZfO47NGXpCsOZwb1lZwMSo7vyy3Zd-ozSzlcFBzAeb6u9b5HOeAFZefGGtHkp1v1tHDuBXSezndoUXT5aDGOoG09HaAk5g4OrgFzlcrRXzbk-tcr3lWNRpa890qAITADmrA68SqmDbN2zkbySeluMTMnHySysa9taK7Sw88cCg2FFDupvpqVnq6lbbd-wyTP1TbRGrkg-vJa9hMXRcgg21XX8nOlii-bNPnHIYOg~XRqoylVyhRc1~E7mRf-mxBibTqTinWNqcnkG-tmEr7aIKIOushUdnhFHJ7CQGn2ukRSH5hYe-xMg__" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Carvis</h3>
          <p className="text-sm">Diagnostic information will appear here</p>
        </div>
      </div>
      
      <div className="bg-[#D3D3D3] mt-4 flex justify-end py-1 border-b-4 ml-20 rounded-sm relative z-10">
        <div className="flex items-center">
          <div className="text-right mr-2">
            <h3 className="font-semibold text-lg">User</h3>
            <p className="text-sm">Help me text text</p>
          </div>
          <div className="p-2">
            <ImageAvatars src="https://s3-alpha-sig.figma.com/img/1cdb/77bd/ce8fbd998763598a67b51c195904d30d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j9AG1nK0XgpgI3TKXWmEzt1r4bM9pgVfxSCEMb4wuVubXr1C5yIXqJpNhhZMC4R6~duzWZtKXveYXHbe7GRZb5GVpg3DxyIDfMNm~u4uJpxfcZBCH9Z1keuFfuY~7i5y3ON~6Yh4DBusK4rS3X2LMBI~hzY3hVh~-kpRgbDesugav8mTmhxVQLYyVPQl8cCxE1j9K7oY4L5Tw5orl0af-7gDYZGHT5Sj8feLMmbCdSxJhBmpy9xL~~uUd~7MVfMDyYzyPEo2QbnQad1-CFGP969ZJezoLdEw7emLJrPK93PBbNF1CScodrAq2tbsyniAmWWYWLx1OY-3NUBpDNBHSw__" />
          </div>
        </div>
      </div>
      
      <div className="w-[540px] h-[270px] bg-[#FAFAFA] ml-64 z-20 relative -mt-[25px] flex flex-col justify-start items-start p-4">
  <div className="relative">
    <img
      className="w-[511px] h-[200px] rounded-md"
      src="https://s3-alpha-sig.figma.com/img/68ae/10da/7622f6f2b43155b98ff59a8f5c9a3919?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wvk9Gpx8Rl8IwryBhgIJeqwHGJj1pSIkn~YUMKhSiVMzkrhuSp3AnH3-1RaOHYF17BkVcY9hP3qvQch~01hnwdTjO9V4tJ73iYa37EX0Yq8gh1I~dnh1l8D4QIr5WYHzqbIguKvlAk8STy1B6n9-5mBFDNLi0s-lIMYCMKrgBElb1RyPn4neEi41Im55t9cTTuNLI9bDscXc~qvQoMBokMkl3X2obzlVaeCNyt6z1hrMsAHtqWNYeI9XdJMOSOdADrvae3bSVB~OziPA9jQk3DpgRUOLpURtEaRsKzUSIpih3Wl7twAcfSPXC-RnI7fEjNgyJK3KRBaliPbmiXmEiA__"
      alt=""
    />
    <img 
      src={image} 
      alt="" 
      className="absolute top-0 right-0 w-8 h-8 cursor-pointer"
    />
  </div>
  <div className="mb-2">
    <h1 className="font-bold">Info</h1>
    <p>This means XYZ</p>
  </div>
</div>
      <div className="fixed bottom-0 w-3/4 bg-[#D3D3D3] p-4">
        <InputBar />
      </div>
    </div>
  );
}

export default ChatbotInfo;