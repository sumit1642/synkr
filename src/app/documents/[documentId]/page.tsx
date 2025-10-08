/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Editor } from "./editor";

interface DocumentIdPageProps {
	params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {

	return (
		<div className="min-h-screen bg-[#FAFAFB] ">
			<Editor />
		</div>
	);
};

export default DocumentIdPage;
