import React, { useState } from 'react';

export default function Community() {
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage(''); 
    }
  };

  const handleChooseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          console.log('Location:', latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <div className="container border bg-white rounded shadow-sm mt-4 p-3">
        {/* Internal CSS */}
        <style>{`
          .chat-area {
            max-height: 300px; 
            overflow-y: scroll;
            padding: 15px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            background-color: #f8f9fa;
            border-radius: 8px;
          }
          .chat-area::-webkit-scrollbar {
            width: 8px;
          }
          .chat-area::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 10px;
          }
          .send-section {
            border-top: 1px solid #ddd;
            padding: 10px;
            background-color: #ffffff;
          }
          .send-section .form-control {
            flex-grow: 1;
            border-radius: 20px;
          }
          .send-section .btn-success {
            border-radius: 20px;
          }
          .btn-custom {
            border: 2px solid #0d6efd; 
            background-color: #e9ecef; 
            color: #0d6efd; 
            border-radius: 20px;
            padding: 5px 15px; 
          }
          .btn-custom:hover {
            background-color: #f8f9fa;
          }
        `}</style>

        <div className="row mx-2 mb-4 p-3 d-flex flex-row align-items-center border rounded bg-light shadow-sm">
          <div className="col-6">
            <h3 className="mb-0">Chat By Location</h3>
            <span><p className="text-muted small mb-0">Powered by SafeZone</p></span>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button className="btn btn-custom shadow-sm" onClick={handleChooseLocation}>
              Choose Location
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus unde dolores tenetur provident, corporis dolorem eveniet animi voluptate natus! Nihil blanditiis fugiat inventore culpa reprehenderit facere esse saepe numquam aliquid!
          Molestias tempora ut unde eligendi corporis tempore ad aut odit adipisci. Debitis, molestias nesciunt a, placeat ipsum et quidem esse hic fugiat, veniam accusantium vero aliquid repellat odit voluptatum eum!
          Numquam velit dolore obcaecati culpa earum eligendi autem, assumenda facilis ullam nihil delectus. Neque non inventore, tenetur pariatur maiores autem voluptas quis modi aspernatur nobis, obcaecati deleniti laboriosam temporibus magnam.
          Saepe velit ullam nemo, sed id quisquam optio sequi, repellendus labore aperiam fugit consequatur veniam nobis voluptate placeat reprehenderit pariatur accusamus est animi consectetur ipsa, minima eos dolore? Ipsam, repellendus?
          Sunt cum rem commodi nostrum ipsum sit, similique doloremque iusto, voluptates libero quaerat ad nesciunt quos minus temporibus harum aut iure quibusdam, consectetur quasi excepturi amet dolores. Dolorum, officia praesentium.
          Provident, alias? Corrupti harum aspernatur non reiciendis repellat libero id ad delectus quae, ipsum, deserunt provident nam laborum ea saepe obcaecati, doloribus possimus ullam quos magnam tempore a! Velit, ipsum?
          Recusandae officia, voluptatibus adipisci accusamus deserunt velit quas cupiditate blanditiis natus dicta quaerat, mollitia in minus, modi et accusantium? Ipsa iusto vitae, ab impedit quis at cupiditate velit doloremque eos.
          Nulla delectus nobis ducimus consequatur, possimus quos ipsam blanditiis accusamus, corporis officiis repellendus fugiat dolores soluta quae fugit, voluptatum culpa atque minima quia eos at aspernatur similique. Quae, est ex.
          Qui possimus nihil voluptatum odio hic debitis reiciendis delectus quasi aspernatur ipsa omnis, iste quidem nisi nam, libero quae minus autem eligendi? Commodi, at consectetur temporibus itaque rem non illum.
          In, velit eum! Sapiente sit autem, doloremque officia molestias quos quia ab esse consectetur corrupti blanditiis tempore id dolores voluptatem voluptatibus laudantium quam ratione iste obcaecati quisquam voluptate in consequuntur?
          Omnis consequatur quia ad doloremque id iusto, corrupti harum voluptatum necessitatibus provident, reprehenderit libero non assumenda cumque at sapiente nesciunt adipisci corporis totam ut ratione. Odit nam delectus at in.
          Eos, et ea vel dignissimos optio voluptatum minus, quidem inventore voluptatem labore qui vero odit. Provident, ullam nesciunt dolore dolores aliquid fugit sed error expedita, id explicabo optio placeat? Ut.
          Saepe sapiente non id autem aliquid quaerat accusantium! Veritatis, temporibus laudantium ullam laborum ut autem voluptates nemo ad adipisci? Pariatur odio accusantium nam, blanditiis sed libero earum eligendi possimus error.
          Aspernatur, illo dolorem ipsam delectus blanditiis vero neque eius ea facilis molestias repellat rerum labore dolorum eligendi quisquam repudiandae ratione pariatur debitis dolor nesciunt iste quod quis fuga corrupti? Officia!
          Voluptates quibusdam doloribus ipsum error assumenda, laborum quis nesciunt quae impedit vel fugiat ipsa. Doloremque ipsam animi maiores totam sint omnis nostrum consequatur eveniet aliquam? Natus quas veniam hic sed.
          In, inventore doloribus dolorem iste sunt consequatur porro suscipit temporibus facilis laudantium, aut, est asperiores eius labore rerum illum tenetur reprehenderit. Architecto quas ex aperiam animi necessitatibus veniam unde! Sed.
          Laboriosam natus repellendus quaerat rem enim quod illum eum, vero ex ratione distinctio, sapiente accusantium molestiae est repudiandae ipsa. Magni cum molestias eveniet porro iure velit adipisci corporis enim! Numquam?
          Vero, laudantium ipsam. Perferendis, maxime eos. Perspiciatis debitis culpa ut beatae placeat architecto veritatis expedita neque aspernatur dicta blanditiis laborum minus minima et ducimus, ipsum saepe reprehenderit dolore odio maiores?
          Quae maiores, quia molestias quibusdam est possimus reiciendis molestiae tempora sapiente illo quo beatae ea corrupti eligendi inventore sit nihil explicabo doloremque dicta aperiam reprehenderit in iusto, voluptatum ducimus? Ducimus.
          Ipsam odit aperiam soluta distinctio voluptatibus recusandae neque minus qui! Consectetur itaque assumenda enim quae. At sapiente, laudantium doloremque accusamus ut, ducimus libero adipisci, debitis sed consequuntur voluptatem voluptates odio!
          Obcaecati suscipit doloribus, cupiditate delectus dolorum quia architecto sapiente unde, minus quasi placeat enim fugiat, consequuntur modi magni recusandae molestiae ullam magnam. Beatae aliquam inventore doloremque nostrum atque, ullam harum.
          Autem tenetur magnam voluptatum sint excepturi nulla assumenda, sit, itaque aliquid quasi odio veniam id commodi optio ullam doloremque iusto provident repellat? Nobis, fugiat temporibus ipsam molestias excepturi maxime cupiditate.
          Dolore quos culpa dolorem quibusdam iure mollitia nam suscipit alias voluptatem, adipisci reiciendis a labore dignissimos maxime repudiandae debitis ullam enim? Assumenda eius esse facilis ut, facere deserunt atque officiis.
        </div>

        {/* Send Message Section */}
        <div className="row mx-auto d-flex flex-row send-section">
          <form onSubmit={handleSubmit} className="d-flex w-100">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-success ms-2 shadow-sm">
              <i className="bi bi-send"></i> Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
