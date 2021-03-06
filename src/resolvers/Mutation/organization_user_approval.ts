const admin = require('firebase-admin');
const functions = require('firebase-functions');
const Lodash = require('lodash');
const { create_mutation, update_mutation, delete_mutation } = require("../query-helper");

const orgsusrappRef = admin.database().ref('organization_user_approvals');

export const organization_user_approvals_mutation = {
  createOrganizationUserApproval(_, { input }, ctx) {
    const orgRef = orgsusrappRef.child(`${input.oid}/${input.uid}`);
    return create_mutation({input}, ctx, orgRef);
  },
  updateOrganizationUserApproval(_, { input }, ctx) {
    const orgRef = orgsusrappRef.child(`${input.oid}/${input.uid}/${input.id}`);
    return update_mutation({input}, ctx, orgRef);
  },
  deleteOrganizationUserApporval(_, { input }, ctx) {
   // const orgRef = orgsusrappRef.child(`${input.oid}/${input.uid}/${input.id}`);
    const orgRef = orgsusrappRef.child(`${input.oid}/${input.uid}`);
    return delete_mutation({input}, ctx, orgRef);
  },
}

