import React, { useState } from 'react';

const Policy = () => {
    const [formData, setFormData] = useState({
        policyName: '',
        policyDescription: '',
        policyCategory: '',
        effectiveDate: '',
        expirationDate: '',
        policyDocument: null,
        policyOwner: '',
        policyApprover: '',
        versionNumber: '',
        status: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <>

            <section>
                <div className="content">
                    <div className="card p-5">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Policy Name:</label>
                                <input className='mb-3 form-control' type="text" name="policyName" value={formData.policyName} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Policy Description:</label>
                                <textarea className='mb-3 form-control' name="policyDescription" value={formData.policyDescription} onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <label>Policy Category:</label>
                                <select className='mb-3 form-control' name="policyCategory" value={formData.policyCategory} onChange={handleChange}>
                                    <option value="">Select Category</option>
                                    <option value="Employee Conduct">Employee Conduct</option>
                                    <option value="Data Security">Data Security</option>
                                    <option value="Leave Policy">Leave Policy</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div>
                                <label>Effective Date:</label>
                                <input className='mb-3 form-control' type="date" name="effectiveDate" value={formData.effectiveDate} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Expiration Date:</label>
                                <input className='mb-3 form-control' type="date" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Policy Document:</label>
                                <input className='mb-3 form-control' type="file" name="policyDocument" onChange={handleChange} />
                            </div>
                            <div>
                                <label>Policy Owner:</label>
                                <input className='mb-3 form-control' type="text" name="policyOwner" value={formData.policyOwner} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Policy Approver:</label>
                                <input className='mb-3 form-control' type="text" name="policyApprover" value={formData.policyApprover} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Version Number:</label>
                                <input className='mb-3 form-control' type="number" name="versionNumber" value={formData.versionNumber} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Status:</label>
                                <select className='mb-3 form-control' name="status" value={formData.status} onChange={handleChange}>
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Under Review">Under Review</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div>
                                <label>Comments:</label>
                                <textarea className='mb-3 form-control' name="comments" value={formData.comments} onChange={handleChange}></textarea>
                            </div>
                            <button className=' btn btn-primary my-3' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Policy;
