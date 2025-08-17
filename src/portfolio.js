

// Website related settings
const settings = {
  isSplash: true, // Change this to false if don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nguyen Son Portfolio",
  description:
    "Là một website developer kiêm designer, đam mê tạo ra những sản phẩm số sáng tạo, không chỉ tối ưu về hiệu suất mà còn mang lại trải nghiệm người dùng tinh tế. Hướng đến việc phát triển các giải pháp web hiện đại, bền vững và có khả năng mở rộng.",
  og: {
    title: "Nguyen Son Portfolio",
    type: "website",
    url: "https://soncryptoz.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Nguyễn Sơn",
  logo_name: "Nguyen Son",
  nickname: "SonDev 👀",
  subTitle:
    "Là một Website Developer đam mê tạo ra những sản phẩm số sáng tạo, không chỉ tối ưu về hiệu suất mà còn mang lại trải nghiệm người dùng tinh tế. Hướng đến việc phát triển các giải pháp web hiện đại, bền vững và có khả năng mở rộng.",
  resumeLink:
    "https://drive.google.com/file/d/1M8qGcaDORU5-jlnstdMlBiD4F_wveAcl/view?usp=sharing", // link cv
  portfolio_repository: "https://github.com/SonCryptoz",
  githubProfile: "https://github.com/SonCryptoz",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/SonCryptoz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:nguyenngocson30102003@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nguyenngocson.nguyen.1426",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/son_intl/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Xây dựng responsive website front end sử dụng ReactJS cơ bản",
        "⚡ Tối ưu hóa ứng dụng web để tăng trải nghiệm người dùng",
        "⚡ Tích hợp API từ các dịch vụ khác nhau",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SCSS",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Back-End Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Tạo app backend trong Node, Express cơ bản",
        "⚡ Tương tác với cơ sở dữ liệu MongoDB, MySQL",
        "⚡ Xây dựng API RESTful",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon-plain:mongodb",
          style: {
            color: "#55AD47",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon-plain:mysql",
          style: {
            color: "#1A6897",
          },
        },
      ],
    },

    {
      title: "Thiết kế UI/UX",
      fileName: "DesignImg",
      skills: [
        "⚡ Thiết kế giao diện người dùng cho các ứng dụng web",
        "⚡ Tùy chỉnh thiết kế logo và xây dựng logo",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2FA3F7",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com",
    },
  ],
};

const degrees = {
  degrees: [
    // {
    //   title: "Indian Institute of Information Technology Kurnool",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "iiitk_logo.png",
    //   alt_name: "IIITDM Kurnool",
    //   duration: "2016 - 2020",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://iiitk.ac.in",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      // title: "Cloud Architecture",
      // subtitle: "- Qwiklabs",
      // logo_path: "gcp_logo.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      // alt_name: "GCP",
      // color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Kinh nghiệm",
  subtitle: "Làm việc và Thực tập",
  description:
    "Tôi đã thực tập và làm việc với tư cách là Website Developer và Designer tại Công ty TNHH Công nghệ và Truyền thông số Nam Anh, nơi tôi có được kinh nghiệm thực tế trong việc xây dựng và tối ưu hóa các trang web. Trong thời gian làm việc tại đó, tôi chịu trách nhiệm phát triển các giao diện thân thiện với người dùng, cải thiện hiệu suất trang web và hợp tác với nhóm để tạo ra các trải nghiệm kỹ thuật số hấp dẫn.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Công việc đã làm",
      work: true,
      experiences: [
        {
          title: "Full-Stack Website",
          company: "Dự án cá nhân",
          company_url: "https://github.com/SonCryptoz/bami-sot",
          logo_path: "bami-sot.png",
          duration: "Tháng 9 năm 2024 - Tháng 12 năm 2024",
          location: "Việt Nam",
          description:
            "Phát triển Website thương mại điện tử cho BamiSot bằng ReactJS, NodeJS, ExpressJS và MongoDB. Thiết kế và triển khai giao diện thân thiện với người dùng, tối ưu hóa hiệu suất và đảm bảo trải nghiệm người dùng liền mạch. Xây dựng hệ thống backend, API và quản lý cơ sở dữ liệu bằng MongoDB. Ngoài ra còn chịu trách nhiệm thiết kế đồ họa quảng cáo và logo của công ty.",
          color: "#FF5733",
        },
        {
          title: "Realtime Chatbox Website",
          company: "Dự án cá nhân",
          company_url: "https://github.com/SonCryptoz/realtime-chat-app",
          logo_path: "chat.png",
          duration: "Tháng 5 năm 2025",
          location: "Việt Nam",
          description:
            "Phát triển Website nhắn tin thời gian thực sử dụng ReactJS, NodeJS, ExpressJS, Socket.io và MongoDB. Cho phép người dùng đăng nhập, tạo cuộc trò chuyện và gửi nhận tin nhắn tức thì. Giao diện thiết kế hiện đại, tối ưu trải nghiệm người dùng trên cả desktop và mobile.",
          color: "#00c8ff",
        },
        {
          title: "Front-End Website",
          company: "Dự án cá nhân",
          company_url: "https://github.com/SonCryptoz/tiktok-ui",
          logo_path: "tiktok_logo.png",
          duration: "Ngày 1 tháng 9 năm 2024 - Ngày 23 tháng 9 năm 2024",
          location: "Việt Nam",
          description:
            "Xây dựng bản sao TikTok đơn giản hóa bằng ReactJS, tập trung vào thiết kế giao diện UI/UX và quản lý trạng thái. Triển khai, tương tác của người dùng và thiết kế phản hồi để có trải nghiệm tốt hơn.",
          color: "#0879bf",
        },
        {
          title: "Back-End Website",
          company: "Dự án cá nhân",
          company_url: "https://github.com/SonCryptoz/NodeJS_Blog",
          logo_path: "blog.png",
          duration: "Ngày 3 tháng 8 năm 2024 - Ngày 14 tháng 8 năm 2024",
          location: "Việt Nam",
          description:
            "Phát triển một ứng dụng Blog Website đơn giản sử dụng NodeJS và ExpressJS. Triển khai các tính năng như xác thực người dùng, hoạt động CRUD cho bài đăng và định tuyến động. Đảm bảo giao diện người dùng sạch sẽ và phản hồi.",
          color: "#9b1578",
        },
        {
          title: "Thiết kế UI/UX",
          company: "Dự án cá nhân",
          company_url: "https://github.com/SonCryptoz/Mobile-Shop",
          logo_path: "uiux.png",
          duration: "Ngày 3 tháng 8 năm 2024",
          location: "Việt Nam",
          description:
            "Thiết kế giao diện Website cho cửa hàng di động trực tuyến, đảm bảo bố cục hiện đại và thân thiện với người dùng. Tạo hình ảnh tiếp thị, bài đăng trên mạng xã hội và logo cho các thương hiệu khác nhau.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Thực tập",
      experiences: [
        {
          title: "Thực tập sinh Full-Stack Developer",
          company: "Công ty TNHH Công nghệ và Truyền thông số Nam Anh",
          company_url: "https://github.com/SonCryptoz/Linh-Kien-Nam-Anh",
          logo_path: "namanh_logo.png",
          duration: "Tháng 1 năm 2025",
          location: "Hải Dương, Việt Nam",
          description:
            "Thiết kế và phát triển Website thương mại điện tử về linh kiện điện tử cho công ty Nam Anh. Sử dụng HTML, CSS, JavaScript và Bootstrap để tạo giao diện hiện đại, tối ưu trải nghiệm người dùng. Tích hợp các chức năng đặt hàng và quản lý sản phẩm.",
          color: "#000000",
        },
        {
          title: "Thực tập sinh Front-End Developer",
          company: "Công ty TNHH Công nghệ và Truyền thông số Nam Anh",
          company_url: "https://github.com/SonCryptoz/Nhom-Kinh-Nhat-Kim",
          logo_path: "nhat-kim-logo.png",
          duration: "Tháng 2 năm 2025",
          location: "Hải Dương, Việt Nam",
          description:
            "Thiết kế và phát triển Website cho khách hàng bên Công ty Cổ phần Nhôm kính Nhất Kim. Xây dựng giao diện web chuyên nghiệp, thân thiện với người dùng bằng HTML, CSS, JavaScript. Đảm bảo trang web hiển thị tốt trên các thiết bị khác nhau và tối ưu hiệu suất.",
          color: "#ee3c26",
        },
        {
          title: "Tiếp thị và Quảng bá sản phẩm",
          company: "Công ty TNHH Công nghệ và Truyền thông số Nam Anh",
          company_url: "#",
          logo_path: "social_media.png",
          duration: "Tháng 11 năm 2024 - Tháng 3 năm 2025",
          location: "Hải Dương, Việt Nam",
          description:
            "Triển khai chiến dịch tiếp thị sản phẩm trên các nền tảng thương mại điện tử như Shopee, Facebook và TikTok. Thiết lập và tối ưu quảng cáo để tiếp cận đúng đối tượng khách hàng, tăng doanh số bán hàng. Quản lý nội dung quảng cáo, thiết kế hình ảnh, video và bài đăng để thu hút khách hàng.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Các dự án",
  description:
    "Các dự án của tôi sử dụng công nghệ Website hiện đại. Kinh nghiệm của tôi là xây dựng các ứng dụng Web và thiết kế giao diện người dùng trực quan. Bên cạnh đó, tôi còn triển khai các ứng dụng này và thiết kế các ấn phẩm đồ họa như logo, hình ảnh quảng bá nhằm phục vụ cho hoạt động xây dựng thương hiệu và tiếp thị.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Liên hệ với tôi",
    profile_image_path: "animated_son.png",
    description:
      "Tôi luôn sẵn sàng cho những cơ hội mới và thách thức trong lĩnh vực phát triển Website. Nếu bạn có bất kỳ câu hỏi nào hãy liên hệ qua các kênh truyền thông xã hội hoặc email của tôi.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Tôi thường viết blog về các công nghệ mới và chia sẻ kiến thức của mình với cộng đồng. Bạn có thể tìm thấy những bài viết của tôi trên blog cá nhân của tôi.",
    link: "https://soncryptoz.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Địa chỉ",
    subtitle: "Phường Hải Dương, Hải Phòng, Việt Nam",
    locality: "Hai Phong, Viet Nam",
    country: "VIE",
    region: "Hai Phong",
    postalCode: "01234",
    streetAddress: "An Ninh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/gmyiy95xivvr7kY27",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
