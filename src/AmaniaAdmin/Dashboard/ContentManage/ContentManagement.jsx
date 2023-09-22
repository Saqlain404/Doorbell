import React from 'react'
import Sidebar from '../Sidebar';

const ContentManagement = () => {
  return (
    
<>
  <div className="admin_main">
    <Sidebar/>
    <div className="admin_main_inner">
     <div className="admin_header shadow">
        <div className="row align-items-center mx-0 justify-content-between w-100">
          <div className="col">
            <a className="sidebar_btn" >
              <i className="fa fa-bars" />
            </a>
          </div>
          <div className="col-auto d-flex align-items-center">
            <a className="change_language me-3" >
              <img src="/img-admin/saudi_flag1.png" alt="" /> عربى
            </a>
            <div className="dropdown Profile_dropdown">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="/img-admin/profile_img1.png" alt="" />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" >
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" >
                    Change Password
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="admin_panel_data height_adjust">
        <div className="row content_management justify-content-center">
          <div className="col-12 mb-5">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="row content_management_box me-0">
                  <h2>Privacy Policies</h2>
                  <a
                    className="edit_content_btn comman_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    href="javscript:;"
                  >
                    <span>
                      <i className="far fa-edit me-2" />
                      Edit
                    </span>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean euismod bibendum laoreet. Proin
                    gravida dolor sit amet lacus accumsan et viverra justo
                    commodo. Proin sodales pulvinar sic tempor. Sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Proin sodales pulvinar sic tempor. Sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="row content_management_box ms-0 text-end">
                  <h2>سياسات الخصوصية</h2>
                  <a
                    className="edit_content_btn comman_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                    href="javscript:;"
                  >
                    <span>
                      <i className="far fa-edit me-2" />
                      Edit
                    </span>
                  </a>
                  <p>
                    لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                    النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف
                    حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو
                    يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا
                    يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                    ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا
                    يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو
                    الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد
                    وأسي. و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا
                    من أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد
                    شخص ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو
                    آخر أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-5">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="row content_management_box me-0">
                  <h2>Terms &amp; Condition</h2>
                  <a
                    className="edit_content_btn comman_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    href="javscript:;"
                  >
                    <span>
                      <i className="far fa-edit me-2" />
                      Edit
                    </span>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean euismod bibendum laoreet. Proin
                    gravida dolor sit amet lacus accumsan et viverra justo
                    commodo. Proin sodales pulvinar sic tempor. Sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Proin sodales pulvinar sic tempor. Sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="row content_management_box ms-0 text-end">
                  <h2>الشروط والأحكام</h2>
                  <a
                    className="edit_content_btn comman_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                    href="javscript:;"
                  >
                    <span>
                      <i className="far fa-edit me-2" />
                      Edit
                    </span>
                  </a>
                  <p>
                    لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                    النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف
                    حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو
                    يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا
                    يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                    ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا
                    يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو
                    الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد
                    وأسي. و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا
                    من أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد
                    شخص ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو
                    آخر أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-5">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="row content_management_box me-0">
                  <h2>About Us</h2>
                  <a
                    className="edit_content_btn comman_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    href="javscript:;"
                  >
                    <span>
                      <i className="far fa-edit me-2" />
                      Edit
                    </span>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean euismod bibendum laoreet. Proin
                    gravida dolor sit amet lacus accumsan et viverra justo
                    commodo. Proin sodales pulvinar sic tempor. Sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Proin sodales pulvinar sic tempor. Sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="row content_management_box ms-0 text-end">
                  <h2>معلومات عنا</h2>
                  <a
                    className="edit_content_btn comman_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                    href="javscript:;"
                  >
                    <span>
                      <i className="far fa-edit me-2" />
                      Edit
                    </span>
                  </a>
                  <p>
                    لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                    النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف
                    حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو
                    يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا
                    يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                    ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا
                    يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو
                    الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد
                    وأسي. و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا
                    من أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد
                    شخص ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو
                    آخر أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Edit Modal */}
  <div
    className="modal fade Edit_help Edit_modal"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Edit
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form className="form-design row mx-0 py-2" action="">
            <div className="form-group col-12">
              <label htmlFor="quesstioon">Title</label>
              <input
                className="form-control"
                type="text"
                id="quesstioon"
                name="quesstioon"
                defaultValue="Privacy Policy"
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="quesstioon">Description</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                style={{ height: 150 }}
                defaultValue={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                }
              />
            </div>
            <div className="form-group col-12 text-center mb-0">
              <button type="submit" className="comman_btn">
                <span>Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Edit Modal */}
  <div
    className="modal fade Edit_help Edit_modal"
    id="staticBackdrop1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Edit
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form className="form-design row mx-0 py-2" action="">
            <div className="form-group col-12 text-end">
              <label className="text-end" htmlFor="quesstioon">
                Title
              </label>
              <input
                className="form-control text-end"
                type="text"
                id="quesstioon"
                name="quesstioon"
                defaultValue="سلامتك تهمنا"
              />
            </div>
            <div className="form-group col-12 text-end">
              <label className="text-end" htmlFor="quesstioon">
                Description
              </label>
              <textarea
                className="form-control text-end"
                name="message"
                id="message"
                style={{ height: 150 }}
                defaultValue={
                  "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاصأن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاصأن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن"
                }
              />
            </div>
            <div className="form-group col-12 text-center mb-0">
              <button type="submit" className="comman_btn">
                <span>Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

)
}

export default ContentManagement;