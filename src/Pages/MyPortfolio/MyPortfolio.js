import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className="grid gap-5 m-4 grid-cols-1">
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body text-left bg-slate-100">
                    <h2 class="card-title">Mohammad Mahmudul Islam</h2>
                    <p>Email:mahmudulislamasif2000@gmail.com</p>
                    <p>Education:B.Sc(Engineering,C.S.E)</p>
                    <hr className="divider bg-black border-r-1"></hr>
                    <p className="font-bold">Techonologies or Skills I have. </p>
                <ol className="list-disc ml-4">
                    <li>Html</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind(daisyUI)</li>
                    <li>nodejs</li>
                    <li>React</li>
                    <li>mongoDB</li>
                </ol>
                <h1 className="text-2xl font-bold">Live website link</h1>
                <a href="https://grocery-cde81.web.app/" className="text-red-400 underline">1.  Warehouse Management</a>
                <a href=" https://celadon-bublanina-c0d836.netlify.app/" className="text-red-400 underline">2. Game Review</a>
                <a href=" https://tutor-project-28836.web.app/" className="text-red-400 underline">3. Tutor Guide</a>
                </div>
                </div>
            </div> 
        </div>
    );
};

export default MyPortfolio;