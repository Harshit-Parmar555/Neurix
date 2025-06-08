import { Wrapper } from "@/components/globals/wrapper";
import { Container } from "@/components/globals/container";
import DownloadBox from "@/components/ui/download_box";

import { downloads } from "@/constants/index.js";

export default function DownloadsPage() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-4 py-8 md:px-0">
      <Wrapper>
        <div>
          <div className="mt-32 mb-8 flex flex-col gap-2">
            <h1 className="text-white text-4xl font-semibold mb-2 font-inter">
              Download Neurix
            </h1>
            <p className="font-inter  text-xl text-zinc-200">
              Choose your platform to download the latest version of Neurix
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-12">
          <h1 className="text-white text-3xl font-semibold font-inter ">
            Latest Version (1.0)
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
            {/* Example DownloadBox usage, replace with your actual props */}
            {downloads.map((download) => (
              <DownloadBox
                key={`${download.platform}-${download.variant}-${download.arch}`}
                platform={download.platform}
                variant={download.variant}
                arch={download.arch}
                os={download.os}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-12">
          <h1 className="text-white text-3xl font-semibold font-inter ">
            Latest Version (1.0)
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
            {/* Example DownloadBox usage, replace with your actual props */}
            {downloads.map((download) => (
              <DownloadBox
                key={`${download.platform}-${download.variant}-${download.arch}`}
                platform={download.platform}
                variant={download.variant}
                arch={download.arch}
                os={download.os}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-12">
          <h1 className="text-white text-3xl font-semibold font-inter">
            Latest Version (1.0)
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
            {/* Example DownloadBox usage, replace with your actual props */}
            {downloads.map((download) => (
              <DownloadBox
                key={`${download.platform}-${download.variant}-${download.arch}`}
                platform={download.platform}
                variant={download.variant}
                arch={download.arch}
                os={download.os}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
