import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-3xl text-lime-700 my-5'>Questions</h1>
            <article>
                <h1 className='text-2xl text-gray-600 font-bold'>#1 How will you improve the performance of a React Application?</h1>
                <p className='text-gray-600 my-5'>আমি যদি আমি অ্যাপের উপাদানগুলি কীভাবে renderকরে তা পরিমাপ এবং optimize  করতে পারেন, আমি প্রতিক্রিয়া অ্যাপগুলির সামগ্রিক গতিতে উল্লেখযোগ্য উন্নতি করতে পারব । আমি আপনাকে প্রতিক্রিয়ার জন্য কিছু সেরা অপ্টিমাইজেশন কৌশল সরবরাহ করব। <br />
                    1. Usage of Pure components <br />
                    2. Code-splitting in React using dynamic import() <br />
                    3. React.memo for component memorization <br />
                    4.Refrain from using Inline style attribute <br />
                    5. Memoizing React components to prevent unnecessary re-renders</p>
            </article>
            <article>
                <h1 className='text-2xl text-gray-600 font-bold'>#2 How will you improve the performance of a React Application?</h1>
                <p className='text-gray-600 my-5'>Manage করার জন্য চার ধরনের React State
                    যখন আমরা আমাদের applications stateসম্পর্কে কথা বলি, তখন কোন ধরনের state আসলে গুরুত্বপূর্ণ।<br />
                    আপনার React apps  আপনাকে সঠিকভাবে পরিচালনা করার জন্য চারটি প্রধান ধরণের state রয়েছে: <br />
                    1. Local state <br />
                    2. Global state <br />
                    3. Server state <br />
                    4.URL state <br />
                </p>
            </article>
            <article>
                <h1 className='text-2xl text-gray-600 font-bold'>#3 How does prototypical inheritance work?</h1>
                <p className='text-gray-600 my-5'>প্রতিটি object তার methods এবং properties সহ একটি internal এবং hidden  সম্পত্তি রয়েছে যা [[Prototype]] নামে পরিচিত।  Prototypal Inheritance হল javascript একটি বৈশিষ্ট্য যা বস্তুতে methods এবং properties যোগ করতে ব্যবহৃত হয়। এটি এমন একটি method যার মাধ্যমে একটি object অন্য object properties এবং methods  উত্তরাধিকারী হতে পারে। Traditionally, একটি object [[Prototype]] পেতে এবং সেট করার জন্য, আমরা Object.getPrototypeOf এবং Object.setPrototypeOf ব্যবহার করি। Nowadays, modern language, এটি ব্যবহার করে সেট করা হচ্ছে
                </p>
            </article>
            <article>
                <h1 className='text-2xl text-gray-600 font-bold'>#4 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='text-gray-600 my-5'>
                    <div class="mockup-code">
                        <pre data-prefix="$"><code>const searchProduct = products.filter(product {'=>'} product.name.includes(searchName))</code></pre>
                    </div>
                </p>
            </article>
            <article>
                <h1 className='text-2xl text-gray-600 font-bold'>#5 What is a unit test? Why should write unit tests?</h1>
                <p className='text-gray-600 my-5'>Unit testing  হল software development process যেখানে একটি application ক্ষুদ্রতম পরীক্ষাযোগ্য অংশ, যাকে unit বলা হয়, সঠিকভাবে পরিচালনার জন্য individually এবং independently যাচাই করা হয়। এই testing methodology software developers এবং কখনও কখনও QA staff দ্বারা development process চলাকালীন করা হয়। <br />
                    Unit testing মূল উদ্দেশ্য হল written কোড আলাদা করে test করা এবং নির্ধারণ করা যে এটি উদ্দেশ্য অনুযায়ী কাজ করে কিনা।
                    Unit testing development process একটি গুরুত্বপূর্ণ পদক্ষেপ, কারণ সঠিকভাবে করা হলে, এটি কোডের প্রাথমিক flaws detect করতে সাহায্য করতে পারে যা পরবর্তী testing stages খুঁজে পাওয়া আরও difficult হতে পারে।
                </p>
            </article>

        </div>
    );
};

export default Blogs;