import React from 'react'
import {
    CCard,
    CCardBody,
    CButton,
    CCardTitle,
    CCardText,
    CCol,
    CFormInput,
    CRow,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CFormLabel,
    CModalFooter,
    CInputGroupText,
    CInputGroup,
    CHeaderBrand,
    CHeaderToggler,
    CFormSwitch,
    CFormSelect,
    CContainer,
    CHeader,
} from '@coreui/react'
import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { collection, getDocs, doc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { loadStripe } from '@stripe/stripe-js'

const Purchase = () => {
    const [visible, setVisible] = useState(false);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "user");
    const createStripeCheckout = httpsCallable(getFunctions(), 'createStripeCheckout');
    const stripe = loadStripe('pk_test_51NLfCWHaVQ7a8uC8g1BD8h7Jwx2JFEMuIeUFWHNFaJfeaIy01l0r9sDPCBI7eI9w4VxINWwunnmjxdsOoeauVIYE00zhmPolPI')

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data);
        };

        getUsers();
    }, []);

    return (
        <CContainer>
            <CCard className="mb-3"></CCard>
            <CRow >
                <CCard className="mb-3">
                    <CCardBody>
                        <CCardTitle>
                            {users.map((user) => {
                                return (
                                    <div key={user.id}>You can create {user.available_service_count} File</div>
                                );
                            })}

                        </CCardTitle>
                        <CCardText>Create a new file to get started or buy more files</CCardText>
                        <CRow>
                            <CCol sm={10}>
                                <CFormInput type="text" placeholder="" aria-label="default input example" />
                            </CCol>
                            <CCol sm={2}>

                                <CButton id="buy-button" onClick={() => createStripeCheckout()
                                        .then(response => {
                                            const sessionId = response.data.id
                                            stripe.redirectToCheckout({ sessionId: sessionId })
                                        }) }>Buy</CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            <CButton onClick={() => setVisible(!visible)}>Create a new File</CButton>
            <CModal size="xl" alignment="center" visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle >Create a new file</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow className="mb-3">
                        <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Type of File</CFormLabel>
                        <CCol sm={10}>
                            <CButton color="dark" variant="outline">Sale</CButton>
                            <CButton color="dark" variant="outline">Purchase</CButton>
                            <CButton color="dark" variant="outline">Mortgage</CButton>

                        </CCol>
                    </CRow>
                    <CRow className="mb-3">
                        <CFormLabel htmlFor="filename" className="col-sm-2 col-form-label">Name of file</CFormLabel>
                        <CCol sm={10}>
                            <CFormInput type="text" id="filename" />
                        </CCol>
                    </CRow>
                    <CRow className="mb-3">
                        <CFormLabel htmlFor="dateid" className="col-sm-2 col-form-label">Closing Date</CFormLabel>
                        <CCol sm={10}>
                            <CFormInput type="date" id="dateid" />
                        </CCol>
                    </CRow>
                    <CRow className="mb-3">
                        <CFormLabel htmlFor="fileno" className="col-sm-2 col-form-label">File no.</CFormLabel>
                        <CCol sm={10}>
                            <CFormInput type="password" id="fileno" />
                        </CCol>
                    </CRow>



                    <CRow className="mb-3">
                        <CHeader>
                            <CHeaderBrand href="#">Subject Property</CHeaderBrand>
                        </CHeader>
                    </CRow>

                    <CRow className="mb-3">
                        <CFormLabel htmlFor="fileno" className="col-sm-2 col-form-label">Address</CFormLabel>
                        <CCol sm={9}>
                            <CFormSelect
                                aria-label="Default select example"
                                options={[
                                    'Open this select menu',
                                    { label: 'One', value: '1' },
                                    { label: 'Two', value: '2' },
                                    { label: 'Three', value: '3', disabled: true }
                                ]}
                            />

                        </CCol>
                        <CCol sm={1}>
                            <CFormSwitch size="xl" label="" id="formSwitchCheckDefaultXL" />
                        </CCol>
                    </CRow>

                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Cancel
                    </CButton>
                    <CButton color="primary">Create</CButton>
                </CModalFooter>
            </CModal>
        </CRow>
        </CContainer >
    )
}

export default Purchase
