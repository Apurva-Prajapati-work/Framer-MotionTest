import { motion, useScroll } from "motion/react";

const Slider = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div
      style={{ paddingTop: "50px", paddingBottom: "20px" }}
      className=" bg-amber-300"
    >
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="w-full fixed origin-left rounded-r-full h-5 top-0 left-0 bg-red-600"></motion.div>
      <h2
        style={{ paddingBottom: "25px" }}
        className="font-bold text-6xl font-mono text-center text-violet-700"
      >
        Let's Try Something New
      </h2>

      <div className="text-center">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque rerum
          natus magni, nulla reiciendis impedit nemo sapiente? Architecto libero
          cumque eum alias adipisci quo. Deleniti ad maxime rem a, obcaecati
          deserunt quaerat voluptatibus dolore excepturi tempora amet nemo
          praesentium qui suscipit error laborum nobis earum sapiente nesciunt
          maiores sint est? Porro culpa dolorem soluta quae qui corporis
          quisquam, libero impedit magnam voluptas amet vel autem. Culpa,
          laboriosam laudantium! Veritatis sint porro alias dolore quibusdam
          voluptatum placeat optio ratione magnam sunt minus rerum, nemo, sequi
          obcaecati dolorem voluptates repellendus commodi aut. Error voluptatum
          tenetur vel nam. Nostrum fugiat asperiores molestias deserunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Possimus eius,
          libero consequatur ut ratione id eos provident nisi quas aperiam ea
          illum omnis, quod rem quos quia repellat fuga nulla qui. Qui ab, saepe
          atque quis necessitatibus dignissimos culpa consectetur eos magni amet
          eius voluptatibus laborum praesentium blanditiis exercitationem
          veritatis laudantium mollitia iure sed quibusdam! Fugiat, tempora
          voluptates maxime facilis deleniti consequuntur possimus, dolores
          maiores sapiente ea soluta! Ea placeat quasi neque nobis quidem error
          culpa blanditiis eos earum sequi excepturi dolorum ex quo laboriosam,
          explicabo voluptates adipisci magni. Laborum et doloremque laudantium
          quas. Molestiae autem dolorum labore. Officia, sunt quaerat? Eligendi
          facilis enim magnam, iusto officia dolor voluptas minima illum fuga
          earum nulla quis repellendus amet quae minus consequatur quo nesciunt
          ullam assumenda necessitatibus? Nemo veritatis odio quibusdam
          perferendis natus impedit unde, voluptates harum repellat error
          corporis dicta iure earum voluptatum, dolore libero molestiae
          dignissimos mollitia adipisci minima praesentium quos. Earum, eos
          veniam, velit voluptates voluptas quaerat aliquam harum unde sequi
          libero dolorum corrupti eveniet pariatur fugiat, amet at architecto?
          Libero necessitatibus qui voluptatibus quasi quibusdam ipsum, quisquam
          tempore distinctio. Placeat nostrum dignissimos omnis provident, animi
          cumque magnam eaque. Eos laudantium corporis, distinctio adipisci
          voluptates voluptatibus aliquam non aperiam!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque rerum
          natus magni, nulla reiciendis impedit nemo sapiente? Architecto libero
          cumque eum alias adipisci quo. Deleniti ad maxime rem a, obcaecati
          deserunt quaerat voluptatibus dolore excepturi tempora amet nemo
          praesentium qui suscipit error laborum nobis earum sapiente nesciunt
          maiores sint est? Porro culpa dolorem soluta quae qui corporis
          quisquam, libero impedit magnam voluptas amet vel autem. Culpa,
          laboriosam laudantium! Veritatis sint porro alias dolore quibusdam
          voluptatum placeat optio ratione magnam sunt minus rerum, nemo, sequi
          obcaecati dolorem voluptates repellendus commodi aut. Error voluptatum
          tenetur vel nam. Nostrum fugiat asperiores molestias deserunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Possimus eius,
          libero consequatur ut ratione id eos provident nisi quas aperiam ea
          illum omnis, quod rem quos quia repellat fuga nulla qui. Qui ab, saepe
          atque quis necessitatibus dignissimos culpa consectetur eos magni amet
          eius voluptatibus laborum praesentium blanditiis exercitationem
          veritatis laudantium mollitia iure sed quibusdam! Fugiat, tempora
          voluptates maxime facilis deleniti consequuntur possimus, dolores
          maiores sapiente ea soluta! Ea placeat quasi neque nobis quidem error
          culpa blanditiis eos earum sequi excepturi dolorum ex quo laboriosam,
          explicabo voluptates adipisci magni. Laborum et doloremque laudantium
          quas. Molestiae autem dolorum labore. Officia, sunt quaerat? Eligendi
          facilis enim magnam, iusto officia dolor voluptas minima illum fuga
          earum nulla quis repellendus amet quae minus consequatur quo nesciunt
          ullam assumenda necessitatibus? Nemo veritatis odio quibusdam
          perferendis natus impedit unde, voluptates harum repellat error
          corporis dicta iure earum voluptatum, dolore libero molestiae
          dignissimos mollitia adipisci minima praesentium quos. Earum, eos
          veniam, velit voluptates voluptas quaerat aliquam harum unde sequi
          libero dolorum corrupti eveniet pariatur fugiat, amet at architecto?
          Libero necessitatibus qui voluptatibus quasi quibusdam ipsum, quisquam
          tempore distinctio. Placeat nostrum dignissimos omnis provident, animi
          cumque magnam eaque. Eos laudantium corporis, distinctio adipisci
          voluptates voluptatibus aliquam non aperiam!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque rerum
          natus magni, nulla reiciendis impedit nemo sapiente? Architecto libero
          cumque eum alias adipisci quo. Deleniti ad maxime rem a, obcaecati
          deserunt quaerat voluptatibus dolore excepturi tempora amet nemo
          praesentium qui suscipit error laborum nobis earum sapiente nesciunt
          maiores sint est? Porro culpa dolorem soluta quae qui corporis
          quisquam, libero impedit magnam voluptas amet vel autem. Culpa,
          laboriosam laudantium! Veritatis sint porro alias dolore quibusdam
          voluptatum placeat optio ratione magnam sunt minus rerum, nemo, sequi
          obcaecati dolorem voluptates repellendus commodi aut. Error voluptatum
          tenetur vel nam. Nostrum fugiat asperiores molestias deserunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Possimus eius,
          libero consequatur ut ratione id eos provident nisi quas aperiam ea
          illum omnis, quod rem quos quia repellat fuga nulla qui. Qui ab, saepe
          atque quis necessitatibus dignissimos culpa consectetur eos magni amet
          eius voluptatibus laborum praesentium blanditiis exercitationem
          veritatis laudantium mollitia iure sed quibusdam! Fugiat, tempora
          voluptates maxime facilis deleniti consequuntur possimus, dolores
          maiores sapiente ea soluta! Ea placeat quasi neque nobis quidem error
          culpa blanditiis eos earum sequi excepturi dolorum ex quo laboriosam,
          explicabo voluptates adipisci magni. Laborum et doloremque laudantium
          quas. Molestiae autem dolorum labore. Officia, sunt quaerat? Eligendi
          facilis enim magnam, iusto officia dolor voluptas minima illum fuga
          earum nulla quis repellendus amet quae minus consequatur quo nesciunt
          ullam assumenda necessitatibus? Nemo veritatis odio quibusdam
          perferendis natus impedit unde, voluptates harum repellat error
          corporis dicta iure earum voluptatum, dolore libero molestiae
          dignissimos mollitia adipisci minima praesentium quos. Earum, eos
          veniam, velit voluptates voluptas quaerat aliquam harum unde sequi
          libero dolorum corrupti eveniet pariatur fugiat, amet at architecto?
          Libero necessitatibus qui voluptatibus quasi quibusdam ipsum, quisquam
          tempore distinctio. Placeat nostrum dignissimos omnis provident, animi
          cumque magnam eaque. Eos laudantium corporis, distinctio adipisci
          voluptates voluptatibus aliquam non aperiam!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque rerum
          natus magni, nulla reiciendis impedit nemo sapiente? Architecto libero
          cumque eum alias adipisci quo. Deleniti ad maxime rem a, obcaecati
          deserunt quaerat voluptatibus dolore excepturi tempora amet nemo
          praesentium qui suscipit error laborum nobis earum sapiente nesciunt
          maiores sint est? Porro culpa dolorem soluta quae qui corporis
          quisquam, libero impedit magnam voluptas amet vel autem. Culpa,
          laboriosam laudantium! Veritatis sint porro alias dolore quibusdam
          voluptatum placeat optio ratione magnam sunt minus rerum, nemo, sequi
          obcaecati dolorem voluptates repellendus commodi aut. Error voluptatum
          tenetur vel nam. Nostrum fugiat asperiores molestias deserunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Possimus eius,
          libero consequatur ut ratione id eos provident nisi quas aperiam ea
          illum omnis, quod rem quos quia repellat fuga nulla qui. Qui ab, saepe
          atque quis necessitatibus dignissimos culpa consectetur eos magni amet
          eius voluptatibus laborum praesentium blanditiis exercitationem
          veritatis laudantium mollitia iure sed quibusdam! Fugiat, tempora
          voluptates maxime facilis deleniti consequuntur possimus, dolores
          maiores sapiente ea soluta! Ea placeat quasi neque nobis quidem error
          culpa blanditiis eos earum sequi excepturi dolorum ex quo laboriosam,
          explicabo voluptates adipisci magni. Laborum et doloremque laudantium
          quas. Molestiae autem dolorum labore. Officia, sunt quaerat? Eligendi
          facilis enim magnam, iusto officia dolor voluptas minima illum fuga
          earum nulla quis repellendus amet quae minus consequatur quo nesciunt
          ullam assumenda necessitatibus? Nemo veritatis odio quibusdam
          perferendis natus impedit unde, voluptates harum repellat error
          corporis dicta iure earum voluptatum, dolore libero molestiae
          dignissimos mollitia adipisci minima praesentium quos. Earum, eos
          veniam, velit voluptates voluptas quaerat aliquam harum unde sequi
          libero dolorum corrupti eveniet pariatur fugiat, amet at architecto?
          Libero necessitatibus qui voluptatibus quasi quibusdam ipsum, quisquam
          tempore distinctio. Placeat nostrum dignissimos omnis provident, animi
          cumque magnam eaque. Eos laudantium corporis, distinctio adipisci
          voluptates voluptatibus aliquam non aperiam!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque rerum
          natus magni, nulla reiciendis impedit nemo sapiente? Architecto libero
          cumque eum alias adipisci quo. Deleniti ad maxime rem a, obcaecati
          deserunt quaerat voluptatibus dolore excepturi tempora amet nemo
          praesentium qui suscipit error laborum nobis earum sapiente nesciunt
          maiores sint est? Porro culpa dolorem soluta quae qui corporis
          quisquam, libero impedit magnam voluptas amet vel autem. Culpa,
          laboriosam laudantium! Veritatis sint porro alias dolore quibusdam
          voluptatum placeat optio ratione magnam sunt minus rerum, nemo, sequi
          obcaecati dolorem voluptates repellendus commodi aut. Error voluptatum
          tenetur vel nam. Nostrum fugiat asperiores molestias deserunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Possimus eius,
          libero consequatur ut ratione id eos provident nisi quas aperiam ea
          illum omnis, quod rem quos quia repellat fuga nulla qui. Qui ab, saepe
          atque quis necessitatibus dignissimos culpa consectetur eos magni amet
          eius voluptatibus laborum praesentium blanditiis exercitationem
          veritatis laudantium mollitia iure sed quibusdam! Fugiat, tempora
          voluptates maxime facilis deleniti consequuntur possimus, dolores
          maiores sapiente ea soluta! Ea placeat quasi neque nobis quidem error
          culpa blanditiis eos earum sequi excepturi dolorum ex quo laboriosam,
          explicabo voluptates adipisci magni. Laborum et doloremque laudantium
          quas. Molestiae autem dolorum labore. Officia, sunt quaerat? Eligendi
          facilis enim magnam, iusto officia dolor voluptas minima illum fuga
          earum nulla quis repellendus amet quae minus consequatur quo nesciunt
          ullam assumenda necessitatibus? Nemo veritatis odio quibusdam
          perferendis natus impedit unde, voluptates harum repellat error
          corporis dicta iure earum voluptatum, dolore libero molestiae
          dignissimos mollitia adipisci minima praesentium quos. Earum, eos
          veniam, velit voluptates voluptas quaerat aliquam harum unde sequi
          libero dolorum corrupti eveniet pariatur fugiat, amet at architecto?
          Libero necessitatibus qui voluptatibus quasi quibusdam ipsum, quisquam
          tempore distinctio. Placeat nostrum dignissimos omnis provident, animi
          cumque magnam eaque. Eos laudantium corporis, distinctio adipisci
          voluptates voluptatibus aliquam non aperiam!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque rerum
          natus magni, nulla reiciendis impedit nemo sapiente? Architecto libero
          cumque eum alias adipisci quo. Deleniti ad maxime rem a, obcaecati
          deserunt quaerat voluptatibus dolore excepturi tempora amet nemo
          praesentium qui suscipit error laborum nobis earum sapiente nesciunt
          maiores sint est? Porro culpa dolorem soluta quae qui corporis
          quisquam, libero impedit magnam voluptas amet vel autem. Culpa,
          laboriosam laudantium! Veritatis sint porro alias dolore quibusdam
          voluptatum placeat optio ratione magnam sunt minus rerum, nemo, sequi
          obcaecati dolorem voluptates repellendus commodi aut. Error voluptatum
          tenetur vel nam. Nostrum fugiat asperiores molestias deserunt. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Possimus eius,
          libero consequatur ut ratione id eos provident nisi quas aperiam ea
          illum omnis, quod rem quos quia repellat fuga nulla qui. Qui ab, saepe
          atque quis necessitatibus dignissimos culpa consectetur eos magni amet
          eius voluptatibus laborum praesentium blanditiis exercitationem
          veritatis laudantium mollitia iure sed quibusdam! Fugiat, tempora
          voluptates maxime facilis deleniti consequuntur possimus, dolores
          maiores sapiente ea soluta! Ea placeat quasi neque nobis quidem error
          culpa blanditiis eos earum sequi excepturi dolorum ex quo laboriosam,
          explicabo voluptates adipisci magni. Laborum et doloremque laudantium
          quas. Molestiae autem dolorum labore. Officia, sunt quaerat? Eligendi
          facilis enim magnam, iusto officia dolor voluptas minima illum fuga
          earum nulla quis repellendus amet quae minus consequatur quo nesciunt
          ullam assumenda necessitatibus? Nemo veritatis odio quibusdam
          perferendis natus impedit unde, voluptates harum repellat error
          corporis dicta iure earum voluptatum, dolore libero molestiae
          dignissimos mollitia adipisci minima praesentium quos. Earum, eos
          veniam, velit voluptates voluptas quaerat aliquam harum unde sequi
          libero dolorum corrupti eveniet pariatur fugiat, amet at architecto?
          Libero necessitatibus qui voluptatibus quasi quibusdam ipsum, quisquam
          tempore distinctio. Placeat nostrum dignissimos omnis provident, animi
          cumque magnam eaque. Eos laudantium corporis, distinctio adipisci
          voluptates voluptatibus aliquam non aperiam!
        </p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Slider;
