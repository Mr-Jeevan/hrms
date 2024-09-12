import React from 'react'

const Policy1 = () => {
    return (
        <>
            <section>
                <div className="content">
                    <form action="post">
                        <div>
                            <div><label htmlFor="">Policy Name:</label></div>
                            <input className="form-control" type="text" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor="">Policy Description:</label>
                            </div>
                            <textarea className="" name="" id=""></textarea>
                        </div>

                        <div>
                            <div>
                                <label htmlFor=""> Policy Category:</label>
                            </div>
                            <select className="" name="" id="">
                                <option value="Employee conduct">Employee conduct</option>
                                <option value="Data Security">Data Security</option>
                                <option value="">Leave Policy</option>
                            </select>
                        </div>

                        <div>
                            <div>
                                <label htmlFor="Effective Date:"></label>
                            </div>
                            <input className="" type="date" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor="">Expiration Date:</label>
                            </div>
                            <input className="" type="date" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor=""> Policy Document:</label>
                            </div>
                            <input className="" type="file" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor="">Policy Owner:</label>
                            </div>
                            <input className="" type="text" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor="">Policy Approver:</label>
                            </div>
                            <input className="" type="text" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor="">Version Number:</label>
                            </div>
                            <input className="" type="number" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor="">Status:</label>
                            </div>
                            <input className="" type="text" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor="">Comments:</label>
                            </div>
                            <textarea className="" name="" id=""></textarea>
                        </div>
                    </form>
                </div>
            </section>



        </>
    )
}

export default Policy1;