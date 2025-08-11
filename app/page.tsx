"use client"

import Image from "next/image"

export default function PixelArtAlbum() {
  // Sample journal entries data
  const journalEntries = [
    {
      date: "July 04, 2025",
      title: "Our Second Date",
      content:
        `Gateway Mall Cubao. A simple place for a simple day together. We had my childhood favorite Zagu, right after one of the
        cheapest options in our meal, Baliwag. I'm sorry it was all I could afford at that time, but I tried my best. 
        What was more meaningful to me was after the meal. We made a connection when we both liked Beach Bunny, listened to some 
        of our most obscure music choices, and appreciated hiphop as a music artform. The subtle smooches as a man, gave me butterflies in my stomach.
        `,
      images: [
        { src: "/images/Messenger_creation_2C535A7D-9244-447C-A7B8-AB51A07B6214.jpeg", alt: "Pixel landscape", className: "col-span-2" }
      ],
    },
    {
      date: "July 09, 2025",
      title: "First game of pool",
      content:
        `After my internship reporting at DOST-ASTI, I had the pleasure to come visit you at you humble abode. This is where I met your
        family; your sisters Andrea and Miel, and your parents. This is also special because before that moment, we played our first game
        of pool at a place nearby, inside a shopping mart of all places. We would steal each other kisses, but nothing prepared me for when
        you finally gave me the longer kiss downstairs. This gave me the huge confidence boost to finally become your man.`,
      images: [
        { src: "/images/Messenger_creation_40ABD341-A7A6-478F-A293-EA7451B1069B.jpeg", alt: "Pixel flowers", className: "col-span-1" },
        { src: "/images/Messenger_creation_F3E9C89D-42B3-4428-A6EC-DA231AF90D57.jpeg", alt: "Pixel portrait", className: "col-span-1" },
      ],
    },
    {
      date: "July 12, 2025",
      title: "Digital Hearts: The Day You Said Yes",
      content:
        `Love found its way into the pixels today. It's time for us to let our hearts feel the peace at the company of each other. As we visit the walls
        of Intramuros, you made me break a cold wall that gives the "tough guy" persona that I am not to be. The day got better at the end and I thought
        it wouldn't be enough. This is the day you finally agreed to be my girlfriend, and kissed me four times! The moment is still engraved in my memory
        and if I need a happy thought on a day that I felt I wasn't right, I just look back at how youu made me feel with those supple lips of yours.`,
      images: [
        
        { src: "/images/Messenger_creation_F73E6712-A9F1-4522-A416-3A49DDDFB103.jpeg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/Messenger_creation_4FBBD72E-4F46-4D20-9F50-5470842C9DC6.jpeg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/Messenger_creation_0E834FF7-0705-4022-8D33-8E15FB6C9F00.jpeg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/Messenger_creation_11ED6BA2-2F3E-49D8-8F8B-D637568E205C.jpeg", alt: "Pixel heart", className: "col-span-1" },
      ],
    },
    {
      date: "July 18, 2025",
      title: "The QC Experience",
      content:
        `What's supposed to be a boring day in the NBI QC office is a cloudy day filled with smiles for us, as if we didn't feel the supposedly bad weather
        we were supposed to have. The somber environment where no one can hear our political frustrations and soft whispers. It is also our first time riding the
        famous QC bus, free from fares all the way to Katipunan. Here we also had a ... TOUCHING moment. It was a new sensation, but it also showed me another 
        reason why I chose to love you: you always had a gentleness with someone like me. I love you my baby <3.`,
      images: [
        
        { src: "/images/Messenger_creation_553062C5-1795-48CA-8E87-CE6150809A34.jpeg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/Messenger_creation_8D06CD92-80F1-4163-90E9-E73424BA8F47.jpeg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/20250718_154702.jpg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/Messenger_creation_2F8EF7BA-3458-4590-89EB-50AA4BC80875.jpeg", alt: "Pixel heart", className: "col-span-1" },
      ],
    },
    {
      date: "July 26, 2025",
      title: `"Anne of Green Gables" and Your Sissy`,
      content:
        `This day is a simple reminder to also remember your friends and family. In the first half, I had the pleasure to meet your young and lively friends of various
        personalities. In the second half, I get to eat with you and Andrea, your sister. I also remember this is the day that I bought you the book that inspired "Anne".
        The genuine smile you had that day is enough to blow me away. It was passionate, it was lively, and best of all, I felt loved for the efforts I gave despite how
        cheap supposedly the book was, because it was not really about the price of the item but how much it meant to you.`,
      images: [
        
        { src: "/images/20250726_171637.jpg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/20250726_171634.jpg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/20250726_171643.jpg", alt: "Pixel heart", className: "col-span-1" },
        { src: "/images/20250718_193332.jpg", alt: "Pixel heart", className: "col-span-1" },
      ],
    },
    {
      date: "July 29, 2025",
      title: `My Fruits of Labor`,
      content:
        `No, it wasn't the certificates nor the medal that were the results of my hardwork. Before I met you, I never made the biggest effort to change who I initially am: a loser
        with an attitude and victim mindset. From that moment on, I made a commitment to become a man deserving of a wonderful woman. Despite six months of being without a lady, I kept
        going. Truly, God does provide you with the person who you are able to connect with the most. Aside from this, seeing you and my sister in that stage gave me the warmest feeling
        ever. It was a breathe of sigh, a job well done, that two of the most important women in my life are with me on an important achievement in my college life.`,
      images: [
        
        { src: "/images/received_2766447826895045.jpeg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/received_2163525930818163.jpeg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/Messenger_creation_07DDBD42-DFCE-42FA-96E7-531408EE863D.jpeg", alt: "Pixel heart", className: "col-span-1" },
        { src: "/images/20250729_115645.jpg", alt: "Pixel heart", className: "col-span-1" },
      ],
    },
    {
      date: "August 01, 2025",
      title: `My Love is All Mine`,
      content:
        `I have a present for you baby, but you have to come with me. I always want to see you for who you are, without the accessories as much as possible. I present this contact lenses
        as a gift to you, to remind yourself that in life you need to keep both eyes open for any opportunities that comes in our way. It is also my present to you because the contacts'
        practicality is my gift of well-being to you, that you too could be appreciated for who you are. I want the people to see how beautiful you are naturally, and without trying too 
        hard to please anyone but yourself. You are a vessel, a light, a ray of sunshine. My heart aches for the times I hurt you. My mind shivers from the thoughts of you being taken away
        from me. In the end, both are at peace knowing that you chose me without a doubt in your mind. Let the brown-crimson color that shows up when you wear these lenses represent the 
        burning desire within you that is waiting for the right time to blossom into a majestic nightingale. Let it soar high and sing as loud as it can, for it is our destiny to serve the
        good.`,
      images: [
        
        { src: "/images/20250801_104010.jpg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/20250801_135920.jpg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/20250801_111223.jpg", alt: "Pixel heart", className: "col-span-2" },
        { src: "/images/20250801_142344.jpg", alt: "Pixel heart", className: "col-span-2" },
      ],
    },
    {
      date: "August 09, 2025",
      title: `The Gift That Keeps on Giving`,
      content:
        `Four days after my graduation and I am being handed two of the finest gifts that I have ever recieved. Firstly, this 
        Zebra Cactus that resembles our love and growth for each other. The plant that we promised to take care for for one another.
        The death of this plant under any circumstances will not destory our love, but like my love for you I will do my best to protect
        and nurture its steady growth. The second is the result of this back picture: our time together. The time we used to have each 
        other in our arms. This day will always be unforgettable to me.`,
      images: [
        
        { src: "/images/20250809_172112.jpg", alt: "Pixel couple", className: "col-span-1" },
        { src: "/images/20250809_202605.jpg", alt: "Pixel couple", className: "col-span-1" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-violet-800" style={{ backgroundColor: "#5B21B6" }}>
      {/* Main Content */}
      <div className="h-screen overflow-y-scroll" style={{ scrollBehavior: "smooth" }}>
        {/* Introduction Page */}
        <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl w-full text-center space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pixel-text mb-6 sm:mb-8">To my Dearest Maria,</h1>
            <div className="text-sm sm:text-base lg:text-lg leading-relaxed pixel-text space-y-4 sm:space-y-6">
              <p>
                I love you with all my heart, and it is unfortunate that on this special day we are both busy, but we
                always put the care and love for each other despite the separation.
              </p>
              <p>
                Let us take a moment to greet ourselves our very first monthsary together. In honor of my love for my
                pretty little baby, I have made this simple diary website filled with our memories from the day we first
                met, until the days regardless of how we felt were instrumental to our relationship.
              </p>
              <p>
                Let this be our reminder of how much we love each other and how we are willing to be our best
                self.
              </p>
            </div>
          </div>
        </section>

        {journalEntries.map((entry, index) => (
          <section key={index} className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Journal Entry */}
              <div className="space-y-4 sm:space-y-6 order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold pixel-text mb-2 sm:mb-4 mt-8 sm:mt-12 lg:mt-16">
                  {entry.date}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold pixel-text mb-4 sm:mb-6">{entry.title}</h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed pixel-text">{entry.content}</p>
              </div>

              {/* Right Column - Image Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 auto-rows-min mt-6 sm:mt-12 lg:mt-24 order-2 lg:order-2">
                {entry.images.map((image, imgIndex) => (
                  <div key={imgIndex} className={`${image.className} overflow-hidden rounded-lg`}>
                    <Image
                      src={image.src || "/placeholder.svg?transparent"}
                      alt={image.alt}
                      className="w-full h-full object-cover pixel-art"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Footer as final page */}
        <section className="min-h-screen flex items-center justify-start p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl w-full">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed pixel-text mb-8 sm:mb-12 text-center lg:text-left max-w-4xl">
              My beloved Maria, cheers to our first month together and I bring forward more memories to come. We are
              always here for each other in spirit, even when the separation by distance hinders happier times with one
              another. The most important thing to remember is to never bet against yourself. I love you and I want us
              to keep our hearts open for one another.
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold pixel-text mb-8 sm:mb-12 text-center lg:text-left">
              With love, Toni.
            </h2>

            {/* Pixel Art Images Grid */}
            <div className="flex flex-wrap justify-center items-end gap-4 sm:gap-6 lg:gap-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-lg flex items-center justify-center pixel-art">
                <Image src="/images/images.jpeg" alt="Pixel star" className="w-full h-full object-contain" />
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/20 rounded-lg flex items-center justify-center pixel-art">
                <Image
                  src="/images/stitch.png"
                  alt="Pixel heart"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-18 h-18 sm:w-22 sm:h-22 lg:w-28 lg:h-28 bg-white/20 rounded-lg flex items-center justify-center pixel-art">
                <Image
                  src="/images/heart.png"
                  alt="Pixel flower"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 bg-white/20 rounded-lg flex items-center justify-center pixel-art">
                <Image
                  src="/images/image_bra.png"
                  alt="Pixel rainbow"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-lg flex items-center justify-center pixel-art">
                <Image
                  src="/images/images.png"
                  alt="Pixel butterfly"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .pixel-text {
          color: white;
          text-shadow: 
            -2px -2px 0 #4A90E2,
            2px -2px 0 #4A90E2,
            -2px 2px 0 #4A90E2,
            2px 2px 0 #4A90E2,
            -2px 0 0 #4A90E2,
            2px 0 0 #4A90E2,
            0 -2px 0 #4A90E2,
            0 2px 0 #4A90E2;
          font-family: 'Press Start 2P', 'Courier New', monospace;
          line-height: 1.6;
        }
        
        @media (min-width: 640px) {
          .pixel-text {
            text-shadow: 
              -2px -2px 0 #4A90E2,
              2px -2px 0 #4A90E2,
              -2px 2px 0 #4A90E2,
              2px 2px 0 #4A90E2,
              -2px 0 0 #4A90E2,
              2px 0 0 #4A90E2,
              0 -2px 0 #4A90E2,
              0 2px 0 #4A90E2;
        }
      }
              

        .pixel-art {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        @media (min-width: 640px) {
          ::-webkit-scrollbar {
            width: 8px;
          }
        }
        ::-webkit-scrollbar-track {
          background: #4C1D95;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #4A90E2;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #357ABD;
        }
      `}</style>
    </div>
  )
}
