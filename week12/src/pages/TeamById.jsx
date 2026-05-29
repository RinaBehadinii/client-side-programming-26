import {useParams} from "react-router-dom";

export default function TeamById() {

    const {name} = useParams()

    return (
        <div className="max-w-2xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Team By Id</h1>
            <p className="text-gray-600 text-lg">
                The team name is: {name}.
                This is a demo app built with React, Vite, and Tailwind CSS. It exists
                purely to show how to deploy a frontend project to platforms like
                Netlify, Vercel, or GitHub Pages.
            </p>
        </div>
    );
}
