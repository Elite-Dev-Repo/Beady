import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-screen h-[40vh] bg-mine flex flex-col">
      <div className="opacity-0 h-0.5 overflow-hidden">
        <a href="https://www.freepik.com/free-photo/portrait-ethnic-curly-young-woman-colored-background_4783790.htm#fromView=search&page=1&position=4&uuid=168944dc-d8ed-4a3c-bb8a-9715c47c6728&query=dark+lady">
          Image by freepik
        </a>
        <a href="https://www.freepik.com/free-photo/young-beautiful-african-girl-smiling-dark-wall_7959368.htm#fromView=search&page=1&position=1&uuid=168944dc-d8ed-4a3c-bb8a-9715c47c6728&query=dark+lady">
          Image by cookie_studio on Freepik
        </a>
      </div>
      <div className="cont flex w-full h-full items-center justify-between gap-5 ">
        <a href="" className="">
          Logo
        </a>

        <div className="flex-1 flex flex-col gap-2 items-end">
          <h3 className="font-medium">Quick Links</h3>
          <div className="flex gap-3 ">
            {" "}
            <a href="">Back to Top</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </div>
        </div>

        <div className="flex-1 ">
          <form action="" className="float-right flex">
            <input
              type="text"
              placeholder="send us an email."
              className="bg-primary text-md py-2 px-2"
            />

            <button className=" w-[50px] flex items-center justify-center bg-foreground text-primary">
              <ChevronRight />
            </button>
          </form>
        </div>
      </div>{" "}
      <div className=" border-t h-[90px] cont">
        <p className="flex flex-col text-center py-4">
          <a href="https://oyenekanemmanuel.xyz" target="_blank">
            Developed by Elite DEV
          </a>{" "}
          <span>{new Date().getFullYear()} | All rights Reserved. | Beady</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
