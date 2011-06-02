﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace PowerTools2011.Services
{
	[DataContract]
	public class ServiceResponseBase
	{
		[DataMember]
		public string Message { get; set; }

		[DataMember]
		public bool Success { get; set; }

		[DataMember]
		public string ProcessId { get; set; }
	}
}