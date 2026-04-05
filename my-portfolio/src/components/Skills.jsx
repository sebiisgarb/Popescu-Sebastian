const skills = [
    "Python", "Git" , "Django", "Flask", "JavaScript", "HTML", "CSS", "SQL", "REST APIs", "Docker",
    "Linux", "PostgreSQL"];

export default function Skills() {
    return (
        <seciton id="skills" className="px-8 py-16 bg-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-center">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {skills.map((s, i) => (
                    <div key={i} className="p-4 bg-grey-700 rounded-lg text-center hover:bg-yellow hover:text-gray-900 cursor-pointer">
                        {s}
                    </div>
                ))}
            </div>
        </seciton>
    );
}
