import { EXPERIENCES } from "../Constants"


const Experience = () => {
  return (
    <div className=" border-b  border-neutral-900 pb-4">
      <h1 className="text-center my-20 text-4xl">Experience</h1>
      <div >

{EXPERIENCES.map((experience,index) =>(
    <div key={index} className="mb-8 flex-wrap flex lg:justify-center">
        <div className="w-full lg:w-1/4">
        <p className="mb-2 text-sm text-neutral-500">{experience.year}</p>
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
        <h6 className="mb-2 font-semibold">{ experience.role} -<span className="text-sm text-purple-400">{experience.company}</span></h6>
     <p className="mb-4 text-neutral-400">{experience.description }</p>
{     experience.technologies.map(
    (tech,index) =>( <span key={index} className="mr-2  mt-4 rounded bg-neutral-900  px-2 py-1 text-sm font-medium text-purple-800"> {tech}</span>)
)}
        </div>
    </div>
))}
      </div>
    </div>
  )
}

export default Experience
