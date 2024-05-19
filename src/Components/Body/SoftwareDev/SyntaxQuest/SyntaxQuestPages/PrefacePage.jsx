import React from "react";
import Stack from 'react-bootstrap/Stack';
import '/src/Components/fonts.css';
import './PrefacePage.css';

function PrefacePage(){
    return(
        <div id="prefaceParent"  className="courier-prime-regular">
            <Stack className="prefaceStack" gap={3}>
                <div className="prefaceBody">
                    <img src="/stacks.png" className="prefaceImgRightBig"/>
                    <p>
                        Hello, I would like to thank you for taking the time to reading my introduction on how this project came about. For those who just wanted to know how this was created,
                        it is created using HTML, CSS, React and React-Bootstrap. I hope that I could explain clearly on the succeeding pages how I created the components used for this website so that I could share the
                        knowledge I gained to others who may have been trying to do the same. It would also be a good refresher to my future self, if one day I do forget.
                        <br /><br />
                        The succeeding section is more of how I started than technical things. You may proceed to the next page without missing anything technical. I would appreciate it a lot though, if you read on. Thank you!   
                    </p>
                </div>
                <div className="prefaceBody">
                    <img src="/wwwai.png" className="prefaceImgRight"/>
                    <p>
                        I have been curious about Web Development and AI / Machine Learning for such a long time, I even bought a bootcamp videos back in 2020 but I have always been in and out of learning it. I would start the lessons
                        and then would forget about it halfway. Maybe a part of me felt that it was too late for me as I have been a C++ software engineer for over a decade and that thought bothered me a lot. 
                        <br /><br />
                        Early 2024 and I have failed a lot of interviews in the last few years because I lack the knowledge or experience of anything other than C++, even Git as I have always used SVN. I didn't even know why I kept on 
                        trying to go into Web and AI when I didn't have any experience. I felt like an imposter.
                        <br /><br />
                    </p>
                    <img src="/drinks.jpg" className="prefaceImgLeft"/>
                    <p> 
                        Occasionally, I would drink with my friends and opened-up to them how I felt, I knew I wouldn't get any consolation. Instead, I got a good scolding of how it was my fault and that 
                        "You are stuck, because never really tried". It was a good eye-opener, I never really did seriously tried. Everything I did to learn was so half-assed. It really helps to have friends who are willing to be frank 
                        with you so that you could pull yourself together and take action. 
                        <br /><br />
                        I started to watch the bootcamp videos and thankfully, it's up to date. Luckily, I have some friends who are in the field and were happy to give me advice and a helping hand.
                        <br /><br />
                    </p>
                    <img src="/coding.jpg" className="prefaceImgRight"/>
                    <p>
                        Every weekend, I committed from 7am - 11am to learn, and sometimes beyond it when I have something I really want to finish. Results didn't come fast, I kept backtracking lessons when I couldn't 
                        understand it fully. I disciplined myself to stick to my schedule, consistency will show results one day. 
                        <br /><br />
                        I learned HTML, CSS and Javascript first as it was the most basic concept and then, I started learning the React framework. But I could not appreciate the lessons as I was better at learning by applying 
                        things, plus seeing something tangible is motivating. 
                        <br /><br />
                    </p>
                    <img src="/syntaxquest.png" className="prefaceImgLeft"/>
                    <p>
                        I've decided to create a website, a place where I could practice, share knowledge and other stuffs. I started on March 2024, and it took me a lot of trials and errors before I could even make it presentable. 
                        <br /><br />
                        I created components and used React-Bootstrap to help me. I could not count how many times I have screwed up and I still do, I am still learning afterall. Those screw-ups and mistakes allowed me to learn. 
                        When I felt that it was presentable enough, I uploaded it to Github so that others may see and launched through vercel, so now here were are. 
                        <br /><br />
                    </p>
                    <img src="/consistency.jpg" className="prefaceImgRight"/>
                    <p>
                        Through this ongoing project, I have gained a lot of knowledge and understanding in Web Development. Knowledge and experience have helped me but the factor that really helped me break through was consistency,
                        resourcefulness and admittance that I know nothing and I need help. Whenever I feel being lazy, I would always repeat to myself that "Little by little with consistency, I can do this" and I do intend to see this through the end.
                        <br /><br />
                        To the person reading this, I hope my wall of text have motivated you to pursue something new that you want to do. Little by little with consistency is the key.    
                    </p>
                </div>
            </Stack>
        </div>
    );
}

export default PrefacePage;