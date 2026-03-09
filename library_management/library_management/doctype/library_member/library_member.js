// Copyright (c) 2026, David-Harold Essiben and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Member", {
	onload(frm) {
        frappe.msgprint(`Hey ${frm.doc.first_name} ${frm.doc.last_name}, welcome to the library!`);

	},
	first_name(frm){
		first_name = frm.doc.first_name
	    last_name = frm.doc.last_name
	    full_name = `${first_name} ${last_name}`
	    frm.set_value("full_name", full_name)
    },
	last_name(frm) {
		first_name = frm.doc.first_name
	    last_name = frm.doc.last_name
	    full_name = `${first_name} ${last_name}`
	    frm.set_value("full_name", full_name)

	},
	after_save(frm) {
		frappe.msgprint(`${frm.doc.full_name}, Duely Saved!`);
	}

});
