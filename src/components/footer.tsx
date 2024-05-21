


export default function footer() {
    return (
        <div className="container-fluid bg-blue py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="mb-0 text-white">Questions? See our <span className="text-primary">FAQ</span>  or email support@clearedtodrive.com</p>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-start justify-content-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item fb-fill cursor" >
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="44" height="33" viewBox="0 0 1069 1024" class="">
                                    <path d="M1030.26 515.13c0-284.499-230.632-515.13-515.13-515.13s-515.13 230.631-515.13 515.13c0 257.113 188.375 470.225 434.64 508.87v-359.967h-130.794v-148.903h130.794v-113.49c0-129.104 76.906-200.417 194.572-200.417 56.36 0 115.311 10.061 115.311 10.061v126.77h-64.957c-63.991 0-83.95 39.708-83.95 80.445v96.631h142.87l-22.84 148.903h-120.031v359.967c246.268-38.645 434.643-251.757 434.643-508.87z"></path>
                                </svg>                            </li>
                            <li className="list-inline-item text-white cursor">Press</li>
                            <li className="list-inline-item text-white cursor">Terms </li>
                            <li className="list-inline-item text-white cursor">Privacy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}