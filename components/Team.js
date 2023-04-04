import Image from "next/image";
import { Sns } from "./sns";

export function Team({ teamMembers }) {
  console.log(teamMembers);
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Team
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers?.map((member) => (
            <div
              key={member.id}
              className="col-span-1 bg-gray-100 rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex-shrink-0">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full rounded-lg h-full"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{member.role}</p>
                </div>
                <Sns />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Programmer",
      imageSrc: "/team/vova.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Writer",
      imageSrc: "/team/jon_outside.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Editor",
      imageSrc: "/team/coo1.jpg",
    },
  ];

  return {
    props: {
      teamMembers,
    },
  };
}
