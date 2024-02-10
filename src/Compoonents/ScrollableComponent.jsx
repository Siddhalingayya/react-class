import React, { useRef } from 'react';

const ScrollableComponent = () => {
  const scrollableRef = useRef(null);

  const handleScroll = () => {
    const scrollHeight = scrollableRef.current.scrollHeight;
    console.log('Scroll Height:', scrollHeight);
  };

  return (
    <div
      ref={scrollableRef}
      style={{
        height: '200px',
        overflowY: 'scroll',
        border: '1px solid #ccc',
      }}
      onScroll={handleScroll}
    >
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Suscipit cupiditate eius ex accusantium enim, unde quasi 
        numquam temporibus consectetur quos corrupti voluptatibus 
        sint earum quam, atque, nam repudiandae obcaecati libero 
        explicabo quibusdam? Veniam, eligendi exercitationem.
         Blanditiis repellendus iure corrupti aut mollitia maiores 
         perspiciatis assumenda cum consectetur excepturi, eaque laborum 
         ducimus ad atque ut quis harum expedita! Itaque neque corporis, 
         ad voluptas eligendi hic placeat minus numquam mollitia dolores molestias
          ex in deleniti optio voluptatibus. Accusamus commodi, incidunt
           veritatis dignissimos ducimus fugit aliquid rerum quidem 
           facere maiores quam nulla tempore exercitationem quod 
           nihil numquam, quas, architecto blanditiis nesciunt nemo
            eaque laudantium quos magni voluptas! Ipsum placeat nulla
            debitis molestiae ducimus atque libero nisi quaerat dolor
            ratione dolores quia, totam sapiente laboriosam a fugit quasi, 
            quam eum eveniet? Iusto quibusdam nihil saepe cum ex nulla in
             deleniti voluptatum quas doloribus temporibus, molestias dolores 
             velit ea veniam quidem impedit, ullam laboriosam nostrum nisi. 
             Exercitationem, tenetur unde quas recusandae fugiat impedit est modi
              amet libero, ut laboriosam quibusdam placeat at doloribus obcaecati natus 
              excepturi voluptatem facilis quis cum quia, sapiente omnis necessitatibus? 
              Asperiores laudantium cumque quam facere nemo assumenda error porro pariatur in
               mollitia, ab impedit inventore officia quas ad ratione! Cupiditate maxime tempora 
               perspiciatis necessitatibus. Quasi sequi optio deserunt natus expedita laborum 
               nihil molestias illo autem maiores sint rem ipsa, quas pariatur non 
               delectus nam repudiandae similique nostrum ipsum voluptate quam est 
               provident animi. Reprehenderit facere quo ipsam, est maxime voluptatibus fugit fuga, 
               non dolor praesentium animi, debitis adipisci laudantium porro dolores ut. 
               Unde cumque sunt adipisci nam corrupti suscipit, aliquam numquam dignissimos 
               id aliquid! Eaque ab voluptatibus nihil moles, eligendi illum d</p>
    </div>
  );
};

export default ScrollableComponent;
