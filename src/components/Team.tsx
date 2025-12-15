import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Mail } from "lucide-react";

interface Socials {
  github?: string;
  linkedin?: string;
  website?: string;
  email?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  socials?: Socials;
}

const team: TeamMember[] = [
  {
    name: "Artur Nowak",
    role: "Team Leader & Lead Developer (Front-End, Back-End, Hardware)",
    socials: {
      github: "https://github.com/Arciiix",
      linkedin: "https://www.linkedin.com/in/arciiix/",
    },
  },
  {
    name: "Michał Żbikowski",
    role: "Back-End Developer & ML Engineer",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/micha%C5%82-%C5%BCbikowski-42221b360/",
    },
  },
  {
    name: "Adam Stajer",
    role: "Front-End Developer",
    socials: {
      linkedin: "https://www.linkedin.com/in/adam-stajer-902382228/",
      github: "https://github.com/AdamStajer07",
    },
  },
  {
    name: "Jakub Michalik",
    role: "Research & Biology Specialist",
    socials: {},
  },
];

const sponsors = [
  { name: "Bank Spółdzielczy", src: "/sponsors/bank.png" },
  { name: "GigaSell AI", src: "/sponsors/gigasellai.svg" },
  { name: "IBS Global", src: "/sponsors/ibs global.png" },
  { name: "Druczek", src: "/sponsors/logo-druczek.png" },
  { name: "Hadex", src: "/sponsors/logo-hadex.svg" },
  { name: "Omozik", src: "/sponsors/omozikfiolet.png" },
  { name: "Wiślanka", src: "/sponsors/wislanka.png" },
  { name: "WSB", src: "/sponsors/wsb.png" },
  { name: "Capri", src: "/sponsors/capri.png" },
];

const SocialIcon = ({ type, url }: { type: keyof Socials; url: string }) => {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    website: Globe,
    email: Mail,
  };
  const Icon = icons[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:bg-white/5 rounded-full"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};

export const Team = () => {
  return (
    <section
      id="team%20&%20sponsors"
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Meet the <span className="text-green-400">Team</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The minds behind AgricUp, dedicated to sustainable innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-green-500/30 transition-colors group"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-800 to-black rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-500 border-2 border-gray-700 group-hover:border-green-500/50 transition-colors">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-green-400 text-sm mb-4">{member.role}</p>

              <div className="flex justify-center gap-2">
                {member.socials &&
                  Object.entries(member.socials).map(([type, url]) => (
                    <SocialIcon
                      key={type}
                      type={type as keyof Socials}
                      url={url}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden group flex flex-col justify-center items-center"
          >
            <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <p className="text-green-400 uppercase tracking-widest text-sm font-bold mb-3">
                Project Supervisor
              </p>
              <h3 className="text-3xl font-bold text-white">Marcin Paprotny</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden group flex flex-col justify-center items-center"
          >
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
            <div className="relative z-10 w-full">
              <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-6">
                Education Partners
              </p>

              <div className="space-y-4">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <img
                    src="/sobieski.png"
                    alt="Sobieski Logo"
                    className="h-32 w-auto mx-auto mb-3 object-contain"
                  />
                  <h3 className="text-lg font-bold text-white mb-1">
                    King John III Sobieski School Complex no. 6
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Jastrzębie-Zdrój</p>
                  <a
                    href="https://zs6sobieski.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs bg-blue-500/10 px-3 py-1.5 rounded-full"
                  >
                    <Globe className="w-3 h-3" />
                    Visit Website
                  </a>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <img
                    src="/ckz.png"
                    alt="CKZ Logo"
                    className="h-24 w-auto mx-auto mb-3 object-contain invert brightness-0"
                  />
                  <h3 className="text-lg font-bold text-white mb-1">
                    Vocational Education Center
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Jastrzębie-Zdrój</p>
                  <a
                    href="https://ckz.jastrzebie.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs bg-blue-500/10 px-3 py-1.5 rounded-full"
                  >
                    <Globe className="w-3 h-3" />
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 mb-12 p-12 rounded-3xl bg-gradient-to-br from-white/5 to-black border border-white/10 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col items-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 uppercase tracking-widest text-sm font-bold mb-8">
              Main Strategic Partner
            </p>

            <img
              src="/jastrzebie.png"
              alt="City of Jastrzębie-Zdrój"
              className="h-32 w-auto object-contain mb-6 drop-shadow-2xl invert brightness-0"
            />

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              City of Jastrzębie-Zdrój
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Supporting innovation and sustainable development.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-12">
            Our sponsors - they make it possible
          </h3>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-48 h-24 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-4 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 group"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
